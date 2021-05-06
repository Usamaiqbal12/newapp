import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  createdataset,
  datasetListFunc,
  updatedataset,
} from "../../services/Api";
import { useStateValue } from "../../StateProvider";
import Params from "./Params";
import { LinearProgress, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./style.css";
import Loading from "../Loading";
import UpdateParams from "./UpdateParams";
function CreateDataset(props) {
  const history = useHistory();
  const [{ attributes }, dispatch] = useStateValue();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [err, setErr] = useState(false);
  const [params, setparams] = useState({
    attributes: "",
    gender: "",
    morality: "",
    size: 0,
    name: props.create ? "" : props.values.dataset_name,
    type_dataset: "parameter",
  });
  let values = {
    attributes: [],
    gender: "",
    morality: "",
    size: 0,
    name: props.create ? "" : props.values.dataset_name,
    type_dataset: "parameter",
  };
  const handleChange = (e) => {
    setparams({ ...params, [e[0].name]: e[0].value });
  };

  const onSelect = (e) => {
    let attributes = [];
    e.map((v) => attributes.push(v.name));

    var unique = attributes.filter(onlyUnique);
    setparams({ ...params, attributes: unique });
  };
  const onRemove = (e) => {
    let attributes = [];
    e.map((v) => {
      attributes.push(v.name);
    });

    setparams({ ...params, attributes: attributes });
  };
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    values = { ...params };
    if (params.name === "" || params.name===undefined) {
      setErr(true);
      setError("Please Type Dataset Name");
      setLoading(false);
    } else {
      if (props.create === true) {
        if (params.attributes == []) {
          let atr = attributes.map((v, i) => {
            return v.name;
          });
          values = { ...values, attributes: atr };
        }
        if (params.gender == "") {
          values = { ...values, gender: "All" };
        }
        if (params.morality == "") {
          values = { ...values, morality: "All" };
        }
        if (params.size == 0) {
          values = { ...values, size: "All" };
        }
        createdataset(JSON.stringify(values)).then((data) => {
          datasetListFunc().then((items) => {
            dispatch({
              type: "ADDDATASET",
              data: items.data,
            });
            setLoading(false);
          });
          props.handleClose();
        });
      } else {
        dispatch({
          type: "ADDCURRENTDATASET",
          data: params,
        });
        if (params.attributes == []) {
          let atr = attributes.map((v, i) => {
            return v.name;
          });
          values = { ...values, attributes: atr };
        }
        if (params.gender == "") {
          values = { ...values, gender: "All" };
        }
        if (params.morality == "") {
          values = { ...values, morality: "All" };
        }
        if (params.size == 0) {
          values = { ...values, size: "All" };
        }
        updatedataset(JSON.stringify(values), props.id).then((data) => {
          datasetListFunc().then((items) => {
            dispatch({
              type: "ADDDATASET",
              data: items.data,
            });
            setLoading(false);
          });
          props.handleClose();
        });
      }
    }
  };
  return (
    <div>
      {props.create ? (
        <Params
          submit={onSubmit}
          handleChange={handleChange}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      ) : (
        <UpdateParams
          submit={onSubmit}
          values={props.values}
          handleChange={handleChange}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      )}

      <div className="px-3 w-100 text-center">
        <button
          className="btn btn-light my-2 w-100"
          onClick={() =>
            props.create  
              ? history.push("/manual")
              : history.push(`/dataseteditmanual/${props.id}`)
          }
        >
          Advance Selection
        </button>
      </div>
      <div className="px-3">
        <TextField
          autoComplete="Dname"
          name="name"
          variant="outlined"
          required
          value={params.name}
          error={err}
          helperText={err && error}
          onChange={(e) => setparams({ ...params, name: e.target.value })}
          fullWidth
          label="Dataset Name"
          autoFocus
        />
        {loading && <LinearProgress />}
        <div className="">
          <Button
            onClick={onSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={props.classes.submit}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateDataset;
