import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  deleteDatasetFunc,
  getDataSet,
  datasetListFunc,
} from "../../services/Api";
import { useStateValue } from "../../StateProvider";
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
      console.log();
      if (data.status === true) {
        const user_id = JSON.parse(localStorage.getItem("user_id"));
        datasetListFunc(user_id).then((items) => {
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
    <div>
      {foundedValue && (
        <>
          <h2>Name:{foundedValue.dataset_name}</h2>
          <h2>Name:{foundedValue.dataset_name}</h2>
          <h2>
            authors:
            {foundedValue.author &&
              foundedValue.author.map((v, i) => {
                return (
                  <p key={i}>
                    {v.first_name} {v.last_name}
                  </p>
                );
              })}
          </h2>
        </>
      )}
      <button onClick={deleteDataset}>Delete Dataset</button>
    </div>
  );
}

export default DatasetDetails;
