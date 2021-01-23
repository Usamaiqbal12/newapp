import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  deleteDatasetFunc,
  getDataSet,
  datasetListFunc,
} from "../../services/Api";
import { useStateValue } from "../../StateProvider";
import AuthorsList from "./AuthorsList";
function DatasetDetails(props) {
  const history = useHistory();
  const [{ datasetList }, dispatch] = useStateValue();

  const [foundedValue, setfoundedValue] = useState([]);
  useEffect(() => {
    const {
      match: { params },
    } = props;
    let mounted = true;
    getDataSet(params.id).then((items) => {
      if (mounted) {
        setfoundedValue(items.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const deleteDataset = (e) => {
    deleteDatasetFunc(foundedValue.id).then((data) => {
      if (data.status === true) {
        datasetListFunc().then((items) => {
          dispatch({
            type: "ADDDATASET",
            data: items.data,
          });
        });
        history.push("/dataset");
      }
    });
  };
  return (
    <div className='mb-5'>
      {foundedValue && (
        <>
          <div className="jumbotron pt-3 mt-3">
            <h1 className="text-center">
              {" "}
              <span className="pt-1 px-3 pb-1 bg-light"> Dataset Details</span>
            </h1>

            <div className="dataset__detail">
              <div className="col-3">
                <p className="lead mt-3">
                  {" "}
                  <b>Dataset Name: </b>
                </p>
                <p className="lead">
                  <b>Dataset Type : </b>
                </p>
                <p className="lead">
                  <b>Authors : </b>
                </p>
                <p className="lead">
                  <b>Created At : </b>
                </p>
              </div>
              <div className="col-3 mt-3">
                <p className="lead"><b>{foundedValue.dataset_name}</b></p>
                <p className="lead"><b>{foundedValue.type_dataset}</b></p>
                <p className="lead">
                  <b>{foundedValue.author ? foundedValue.author.length : ""}</b>
                </p>
                <p className="lead">
                  <b>{foundedValue.created_at
                    ? foundedValue.created_at.split(":")[0].split("T")[0]
                    : ""}</b>
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <button className='btn btn-secondary mr-3' onClick={deleteDataset}>Delete Dataset</button>
      <button className='btn btn-secondary mr-3'
        onClick={() =>
          foundedValue && history.push(`/discussionmode/${foundedValue.id}`)
        }
      >
        Disucssion Mode
      </button>
      <button className='btn btn-secondary'
        onClick={() =>
          foundedValue && history.push(`/datasetedit/${foundedValue.id}`)
        }
      >
        Edit Dataset
      </button>
          </div>
          <AuthorsList foundedValue={foundedValue} />
        </>
      )}
  
    </div>
  );
}

export default DatasetDetails;
