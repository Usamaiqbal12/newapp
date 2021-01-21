import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function Params() {
  const [options, setOptions] = useState([
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
  ]);
  return (
    <div>
      <Multiselect options={options} displayValue="name" />
    </div>
  );
}

export default Params;
