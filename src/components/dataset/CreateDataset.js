import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createdataset } from "../../services/Api";
import Parameters from "./Parameters";
function CreateDataset() {
  const history = useHistory()
  const data = ["athlete", "politician"];
  const [attributes, setattributes] = useState([]);
  const [params, setparams] = useState({
    attributes: attributes,
    gender: "",
    morality: "",
    size: 0,
    name: "",
    type_dataset:"parameter"
  });
  const handleAttribute = (e) => {
    const index = attributes.indexOf(e.target.name);
    if (!e.target.checked) {
      attributes.splice(index, 1);
      setattributes([...attributes]);
      setparams({ ...params, attributes: [...attributes] });
    } else {
      if (index === -1) {
        setattributes([...attributes, e.target.name]);
        setparams({
          ...params,
          attributes: [...params.attributes, e.target.name],
        });
      }
    }
  };
  const handleChange = (e) => {
    setparams({ ...params, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    createdataset(JSON.stringify(params))
  };
  return (
    <>
      <Parameters
        submit={submit}
        handleAttribute={handleAttribute}
        handleChange={handleChange}
      />
      <div>
        <button onClick={()=> history.push('/manual')}>Advance Selection</button>
      </div>
      <div>
        Dataset Name:
        <input type="text" onChange={handleChange} name="name" />
        <button onClick={submit}>submit</button>
      </div>
    </>
  );
}

export default CreateDataset;
