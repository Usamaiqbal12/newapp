// // @ts-ignore
// import React, { useState } from "react";
// import { MultiSelect } from "multiselect-react-dropdown";

// const Params = () => {
//   const data = [
//     { attributes: "athelete", id: "1" },
//     { attributes: "sportsman", id: "2" },
//     { attributes: "politician", id: "3" },
//     { gender: "Male", id: "1" },
//     { gender: "Female", id: "2" },
//     { gender: "All", id: "3" },
//   ];
//   const [params, setParams] = useState(data);
//   const onSelect = () => {
//     console.log(params);
//   };
//   const onRemove = () => {
//     console.log(params);
//   };
//   return (
// <>
//   <div className="container">
//     <form>
//       <div className="row">
//         <div className="col-sm-3 col-md-3">
//           <h5>Attributes: </h5>
//           <MultiSelect
//             options={params}
//             displayValue="attributes"
//             onSelect={onSelect}
//             onRemove={onRemove}
//           />
//         </div>
//         <div className="col-sm-3 col-md-3">
//           <h5>Gender: </h5>
//           {/* <MultiSelect options={params} displayValue="gender" /> */}
//         </div>
//         <div className="col-sm-3 col-md-3">
//           <h5>Mortality: </h5>
//           {/* <MultiSelect options={params} displayValue="mortality" /> */}
//         </div>
//         <div className="col-sm-3 col-md-3">
//           <h5>Size: </h5>
//           {/* <MultiSelect options={params} displayValue="size" /> */}
//         </div>
//       </div>
//     </form>
//   </div>
// </>
//   );
// };

// export default Params;

// import React, { useState } from "react";
// import { Multiselect } from "multiselect-react-dropdown";

// function Params() {
//   const [options, setOptions] = useState([
//     { attributes: "athelete", id: 1 },
//     { attributes: "sportsman", id: 2 },
//     { attributes: "politician", id: 3 },
//     { gender: "Male", id: 1 },
//     { gender: "Female", id: 2 },
//     { gender: "All", id: 3 },
//   ]);
//   return (
//     <>
//       <div className="container">
//         <form>
//           <div className="row">
//             <div className="col-sm-3 col-md-3">
//               <h5>Attributes: </h5>
//               <Multiselect options={options} displayValue="attributes" />
//             </div>
//             <div className="col-sm-3 col-md-3">
//               <h5>Gender: </h5>
//               <MultiSelect options={options} displayValue="gender" />
//             </div>
//             <div className="col-sm-3 col-md-3">
//               <h5>Mortality: </h5>
//               {/* <MultiSelect options={params} displayValue="mortality" /> */}
//             </div>
//             <div className="col-sm-3 col-md-3">
//               <h5>Size: </h5>
//               {/* <MultiSelect options={params} displayValue="size" /> */}
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
function Params(props) {
  const [attributes, setAttributes] = useState([]);
  const { handleChange } = props;
  const [options, setOptions] = useState([
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
    { name: "abc", id: 3 },
    { name: "abcc", id: 4 },
    { name: "abccx", id: 5 },
    { name: "abccc", id: 6 },

  ]);
  const onSelect = (e) => {
    e.map((v, i) => attributes.push(v.name));
    setAttributes([...attributes]);
  };
  const onRemove = (e) => {
    let abc = [];
    e.map((v, i) => {
      abc.push(v.name);
    });
    attributes.splice(0, attributes.length);
    setAttributes([...abc]);
  };
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const onSubmit = () => {
    var unique = attributes.filter(onlyUnique);
    console.log(unique);
  };
  return (
    <div className="params col-7">
      <div>
        <button onClick={onSubmit}>Advance Selection</button>
        <h3>Attributes</h3>
        <Multiselect
          options={options}
          displayValue="name"
          onSelect={onSelect}
          showCheckbox={true}
          onRemove={onRemove}
        />
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

export default Params;
