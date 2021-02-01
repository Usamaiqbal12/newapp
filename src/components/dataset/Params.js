import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

function Params(props) {
  const { handleChange, onSelect, onRemove } = props;
  const attributes = [
    { name: "Politician", id: 1 },
    { name: "Athlete", id: 2 },
    { name: "Athlete1", id: 3 },
    { name: "Athlete2", id: 4 },
    { name: "Athlete3", id: 5 },

  ];
  const gender = [
    { value: "M", id: 1, name: "gender", display: "Male" },
    { value: "F", id: 2, name: "gender", display: "Female" },
    { value: "All", id: 3, name: "gender", display: "All" },
  ];
  const morality = [
    { value: "Living", id: 1, name: "morality" },
    { value: "Deceased", id: 2, name: "morality" },
    { value: "All", id: 3, name: "morality" },
  ];
  const size = [
    { value: "25", id: 1, name: "size" },
    { value: "50", id: 2, name: "size" },
    { value: "100", id: 3, name: "size" },
    { value: "150", id: 4, name: "size" },
    { value: "200", id: 5, name: "size" },
    { value: "All", id: 6, name: "size" },
  ];
  const style = {
    searchBox: {
      fontSize: "14px",
      minHeight: "40px",
    },
  };

  const parameterForm = () => {
    return (
      <form>
        <div className="">
          <div className="col-sm-12 col-md-12">
            <h5>Attributes: </h5>
            <Multiselect
              options={attributes}
              displayValue="name"
              onSelect={onSelect}
              showCheckbox={true}
              style={style}
              onRemove={onRemove}
            />
          </div>
          <div className="col-sm-12 col-md-12">
            <h5>Gender: </h5>

            <Multiselect
              style={style}
              options={gender}
              displayValue="display"
              onSelect={handleChange}
              id='input__gender'
              singleSelect
            />
          </div>
          <div className="col-sm-12 col-md-12">
            <h5>Mortality: </h5>
            <Multiselect
              options={morality}
              style={style}
              displayValue="value"
              id='input__gender'
              onSelect={handleChange}
              singleSelect
            />
          </div>
          <div className="col-sm-12 col-md-12">
            <h5>Size: </h5>
            <Multiselect
              options={size}
              placeholder='Size'
              style={style}
              displayValue="value"
              id='input__gender'
              onSelect={handleChange}
              singleSelect
            />
          </div>
        </div>
      </form>
    );
  };
  return <>{parameterForm()}</>;
}

export default Params;
