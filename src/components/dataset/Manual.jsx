import React, { useEffect, useState } from "react";
import {
  authorsList,
  createdataset,
  datasetListFunc,
} from "../../services/Api";
import { useStateValue } from "../../StateProvider";
function Manual() {
  const [, dispatch] = useStateValue();
  const [authors, setauthorsList] = useState([]);
  const [authorsId, setauthorsId] = useState([]);
  const [authorsData, setauthorsData] = useState({
    name: "",
    type_dataset: "manual",
    authors: [],
  });
  useEffect(() => {
    let mounted = true;
    authorsList().then((items) => {
      if (mounted) {
        setauthorsList(items.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const handleChange = (e) => {
    authorsId.push(parseInt(e.target.value));
    setauthorsId([...authorsId]);
    setauthorsData({ ...authorsData, authors: [...authorsId] });
  };
  const handleDatasetName = (e) => {
    setauthorsData({ ...authorsData, name: e.target.value });
  };
  const submit = (e) => {
    if (authorsData.authors.length > 0) {
      if (authorsData.authors.name !== "") {
        createdataset(JSON.stringify(authorsData));
        setauthorsData({ ...authorsData, name: "" });
        datasetListFunc().then((items) => {
          dispatch({
            type: "ADDDATASET",
            data: items.data,
          });
          console.log('helo');
        });
      } else {
        alert("Please Type Dataset Name !");
      }
    } else {
      alert("Please Select Any Author !");
    }
  };
  return (
    <>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Select</th>
          </tr>
        </thead>
        <tbody>
          {authors
            ? authors.map((v, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <th>{v.first_name}</th>
                    <th>{v.last_name}</th>

                    <th className="px-4">
                      <input
                        type="checkbox"
                        value={v.id}
                        onChange={handleChange}
                      />
                    </th>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
      Dataset Name:{" "}
      <input
        type="text"
        value={authorsData.name}
        onChange={handleDatasetName}
      />
      <button onClick={submit}>Create</button>
    </>
  );
}

export default Manual;
