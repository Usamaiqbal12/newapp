import React, { useState, useEffect } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { listAttributes } from "../../services/Api";
import { useStateValue } from "../../StateProvider";
import TextField from "@material-ui/core/TextField";

function UpdateParams(props) {
  const [{ attributes }] = useStateValue();

  const { handleChange, onSelect, onRemove, values } = props;
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
  let newAttr = props.values.attributes.replace("[", "");
  newAttr = newAttr.replace("]", "").split("',");
  newAttr = newAttr.map((v) => v.replace("'", ""));
  newAttr = newAttr.map((v) => v.replace("'", ""));
  let updateAttr = [];
  let updateGender = [];
  let updateMorality = [];
  let updateSize = [];
  newAttr = newAttr.map((v) => updateAttr.push({ name: v.trim() }));
  let nameGender = "";
  if (props.values.gender == "M") {
    nameGender = "Male";
  } else if (props.values.gender == "F") {
    nameGender = "Female";
  } else {
    nameGender = "All";
  }
  updateGender.push({
    name: "gender",
    value: props.values.gender,
    display: nameGender,
  });
  updateMorality.push({ name: "morality", value: props.values.morality });
  updateSize.push({ name: "size", value: props.values.size });
  const parameterForm = () => {
    return (
      <form>
        <div className="">
          <div className="col-sm-12 col-md-12">
            <h6>Attributes update: </h6>
            <Multiselect
              options={attributes && attributes}
              displayValue="name"
              onSelect={onSelect}
              showCheckbox={true}
              selectedValues={updateAttr}
              style={style}
              onRemove={onRemove}
            />
          </div>
          <div className="col-sm-12 col-md-12">
            <h6 className="mt-1 mb-2">Gender: </h6>

            <Multiselect
              style={style}
              options={gender}
              displayValue="display"
              selectedValues={updateGender}
              onSelect={handleChange}
              id="input__gender"
              placeholder="hello"
              label="he"
              singleSelect
            />
          </div>
          <div className="col-sm-12 col-md-12">
            <h6 className="mt-1 mb-2">Mortality: </h6>
                <Multiselect
                  options={morality}
                  style={style}
                  displayValue="value"
                  selectedValues={updateMorality}
                  id="input__gender"
                  onSelect={handleChange}
                  singleSelect
                />
          </div>
          <div className="col-sm-12 col-md-12">
            <h6 className="mt-1 mb-2">Size: </h6>

            <Multiselect
              options={size}
              placeholder="Size"
              selectedValues={updateSize}
              style={style}
              displayValue="value"
              id="input__gender"
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

export default UpdateParams;
