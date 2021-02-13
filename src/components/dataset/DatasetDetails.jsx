import { LinearProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  deleteDatasetFunc,
  getDataSet,
  datasetListFunc,
} from "../../services/Api";
import { useStateValue } from "../../StateProvider";
import Loading from "../Loading";
import RSkeleton from "../RSkeleton";
import AuthorsList from "./AuthorsList";
import CreateDatasetModal from "./CreateDatasetModal";
function DatasetDetails(props) {
  const history = useHistory();
  const [{ currentDataset }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [foundedValue, setfoundedValue] = useState([]);
  const {
    match: { params },
  } = props;
  useEffect(() => {
    let mounted = true;
    getDataSet(params.id).then((items) => {
      if (mounted) {
        setfoundedValue(items.data);
      }
    });
    return () => (mounted = false);
  }, [currentDataset]);

  const deleteDataset = (e) => {
    setLoading(true);
    deleteDatasetFunc(foundedValue.id).then((data) => {
      if (data.status === true) {
        datasetListFunc().then((items) => {
          dispatch({
            type: "ADDDATASET",
            data: items.data,
          });
          setLoading(false);
        });
        history.push("/dataset");
      }
    });
  };
  return (
    <div className="mb-5 container" >
      {loading && <Loading />}
      {foundedValue && (
        <>
          <div className="jumbotron pt-3 mt-3 " style={{backgroundColor:'#443F39'}}
>
            <h1 className="text-center">
              {" "}
              <span className="pt-1 px-4 pb-1 dataset__heading rounded mb-2">
                Dataset Details
              </span>
            </h1>

            <div className="dataset__detail rounded">
              <div className="col-sm-6 col-7 col-md-4">
                <p className="lead mt-0 ">
                  {" "}
                  <b className="dataset__text">Dataset Name: </b>
                </p>
                <p className="lead">
                  <b className="dataset__text">Dataset Type : </b>
                </p>
                <p className="lead">
                  <b className="dataset__text">Authors : </b>
                </p>
                <p className="lead">
                  <b className="dataset__text">Created At : </b>
                </p>
              </div>
              <div className="col-sm-6 col-5 col-md-5">
                <p className="lead mt-0">
                  <b className="dataset__text">
                    {foundedValue.dataset_name ? (
                      foundedValue.dataset_name
                    ) : (
                      <RSkeleton />
                    )}
                  </b>
                </p>
                <p className="lead">
                  <b className="dataset__text">
                    {foundedValue.type_dataset ? (
                      foundedValue.type_dataset
                    ) : (
                      <RSkeleton />
                    )}
                  </b>
                </p>
                <p className="lead">
                  <b className="dataset__text">
                    {foundedValue.author ? (
                      foundedValue.author.length
                    ) : (
                      <RSkeleton />
                    )}
                  </b>
                </p>
                <p className="lead">
                  <b className="dataset__date">
                    {foundedValue.created_at ? (
                      foundedValue.created_at.split(":")[0].split("T")[0]
                    ) : (
                      <RSkeleton />
                    )}
                  </b>
                </p>
              </div>
            </div>
            <hr className="my-4 bg-light" />
            <button
              className="btn text-light mr-3 col-xs-12 mb-2 col-sm-12 col-md-3"
              style={{ backgroundColor: "#353431" }}
              onClick={deleteDataset}
            >
              Delete Dataset
            </button>
            <button
              className="btn text-light mr-3 col-xs-12 col-sm-12 col-md-3 mb-2"
              style={{ backgroundColor: "#353431" }}
              onClick={() =>
                foundedValue &&
                history.push(`/discussionmode/${foundedValue.id}`)
              }
            >
              Disucssion Mode
            </button>
            <CreateDatasetModal id={foundedValue.id} create={false} />
          </div>
          <AuthorsList foundedValue={foundedValue} />
        </>
      )}
    </div>
  );
}

export default DatasetDetails;
