import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function Newparams() {
  const [options, setOptions] = useState([
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
  ]);
  return (
    <div>
      <Multiselect
        options={options} // Options to display in the dropdown
        // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        // onSelect={this.onSelect} // Function will trigger on select event
        // onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
    </div>
  );
}

export default Newparams;
