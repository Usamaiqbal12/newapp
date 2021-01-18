import React from "react";
import "./style.css";
function Parameters(props) {
  const { handleChange, handleAttribute } = props;

  return (
    <div className="params">
      <div>
        <h3>Attributes</h3>
        <div>
          <input type="checkbox" name="Athlete" onChange={handleAttribute} />{" "}
          Athlete
        </div>
        <div>
          <input type="checkbox" name="jadu" onChange={handleAttribute} /> jadu
        </div>
        <div>
          <input type="checkbox" name="Politician" onChange={handleAttribute} />{" "}
          politician
        </div>
      </div>
      <div className="mx-3">
        <h3>Gender</h3>
        <div>
          <input type="radio" name="gender" onChange={handleChange} value="F" />
          {" Female "}
        </div>
        <div>
          <input type="radio" name="gender" onChange={handleChange} value="M" />{" "}
          {"Male"}
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            onChange={handleChange}
            value="all"
          />
          {" All "}
        </div>
      </div>
      <div className="mx-3">
        <h3>Morality</h3>
        <div>
          <input
            type="radio"
            name="morality"
            onChange={handleChange}
            value="living"
          />
          {" Living "}
        </div>
        <div>
          <input
            type="radio"
            name="morality"
            onChange={handleChange}
            value="deceased"
          />{" "}
          {"Deceased"}
        </div>
        <div>
          <input
            type="radio"
            name="morality"
            onChange={handleChange}
            value="all"
          />
          {" All "}
        </div>
      </div>

      <div className="mx-3">
        <h3>Size</h3>
        <div>
          <input type="radio" name="size" onChange={handleChange} value="25" />
          {" 25 "}
        </div>
        <div>
          <input type="radio" name="size" onChange={handleChange} value="50" />{" "}
          {"50"}
        </div>
        <div>
          <input type="radio" name="size" onChange={handleChange} value="100" />
          {" 100 "}
        </div>
        <div>
          <input type="radio" name="size" onChange={handleChange} value="150" />
          {" 150 "}
        </div>
        <div>
          <input type="radio" name="size" onChange={handleChange} value="200" />
          {" 200 "}
        </div>
        <div>
          <input type="radio" name="size" onChange={handleChange} value="all" />
          {" All "}
        </div>
      </div>
    </div>
  );
}

export default Parameters;
