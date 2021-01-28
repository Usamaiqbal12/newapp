import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createdataset, datasetListFunc, updatedataset } from "../../services/Api";
import { useStateValue } from "../../StateProvider";
import Params from "./Params";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./style.css";
function CreateDataset(props) {
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const [params, setparams] = useState({
    attributes: "",
    gender: "",
    morality: "",
    size: 0,
    name: "",
    type_dataset: "parameter",
  });

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
    if (
      params.attributes == [] ||
      params.gender === "" ||
      params.morality === "" ||
      params.size === 0
    ) {
      alert("Please Select Parameters!");
    } else if (params.name === "") {
      alert("Please Type Dataset Name");
    } else {
      if (props.create === true) {
        createdataset(JSON.stringify(params));
        console.log("hylo");
      }
      else{
        dispatch({
          type:'ADDCURRENTDATASET',
          data:params
        })
        updatedataset(JSON.stringify(params),props.id)
        .then(data=>{
          console.log(data)
        })
      }
      datasetListFunc().then((items) => {
        dispatch({
          type: "ADDDATASET",
          data: items.data,
        });
      });
      setparams({ ...params, name: "" });
    }
  };

  return (
    <>
      <Params
        submit={onSubmit}
        handleChange={handleChange}
        onSelect={onSelect}
        onRemove={onRemove}
      />
      <div className="px-3 w-100 text-center">
        <button
          className="btn btn-light my-2 w-100"
          onClick={() => props.create?history.push("/manual"):history.push(`/dataseteditmanual/${props.id}`)}
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
          onChange={(e) => setparams({ ...params, name: e.target.value })}
          fullWidth
          label="Dataset Name"
          autoFocus
        />
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
    </>
  );
}

export default CreateDataset;
