import React, { Component } from "react";
class CreateSearch extends Component {
  state = {
    attributes: "",
    gender: "",
    mortality: "",
    size: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onBtnChange = () => {
    const { attributes, mortality, size, gender } = this.state;
    console.log(
      `Attributes: ${attributes} Gender: ${gender} Mortality: ${mortality} Size: ${size}`
    );
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { attributes, gender, mortality, size, handleSubmit } = this.state;

    return (
      <>
        <form onChange={handleSubmit}>
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <h5>Attributes: {attributes}</h5>
              <input
                type="radio"
                name="attributes"
                checked={attributes === "athelete"}
                value="athelete"
                onChange={this.handleChange}
              />
              <label>Athelete</label> <br />
              <input
                type="radio"
                name="attributes"
                checked={attributes === "politician"}
                value="politician"
                onChange={this.handleChange}
              />
              <label>Politician</label>
              <br />
              <input
                type="radio"
                name="attributes"
                checked={attributes === "sportsman"}
                value="sportsman"
                onChange={this.handleChange}
              />
              <label>Sportsman</label>
              <br />
            </div>
            <div className="col-sm-3 col-md-3">
              <h5>Gender: {gender}</h5>
              <input
                type="radio"
                name="gender"
                checked={gender === "male"}
                value="male"
                onChange={this.handleChange}
              />
              <label>Male</label>
              <br />
              <input
                type="radio"
                name="gender"
                checked={gender === "female"}
                value="female"
                onChange={this.handleChange}
              />
              <label>Female</label>
              <br />
              <input
                type="radio"
                name="gender"
                checked={gender === "all"}
                value="all"
                onChange={this.handleChange}
              />
              <label>All</label>
              <br />
            </div>
            <div className="col-sm-3 col-md-3">
              <h5>Mortality: {mortality}</h5>
              <input
                type="radio"
                name="mortality"
                checked={mortality === "living"}
                value="living"
                onChange={this.handleChange}
              />
              <label>Living</label>
              <br />
              <input
                type="radio"
                name="mortality"
                checked={mortality === "deceased"}
                value="deceased"
                onChange={this.handleChange}
              />
              <label>Deceased</label>
              <br />
              <input
                type="radio"
                name="mortality"
                checked={mortality === "all"}
                value="all"
                onChange={this.handleChange}
              />
              <label>All</label>
              <br />
            </div>
            <div className="col-sm-3 col-md-3">
              <h5>Size: {size}</h5>
              <input
                type="radio"
                name="size"
                checked={size === "25"}
                value="25"
                onChange={this.handleChange}
              />
              <label>25</label>
              <br />
              <input
                type="radio"
                name="size"
                checked={size === "50"}
                value="50"
                onChange={this.handleChange}
              />
              <label>50</label>
              <br />
              <input
                type="radio"
                name="size"
                checked={size === "100"}
                value="100"
                onChange={this.handleChange}
              />
              <label>100</label>
              <br />
              <input
                type="radio"
                name="size"
                checked={size === "250"}
                value="250"
                onChange={this.handleChange}
              />
              <label>250</label>
              <br />
              <input
                type="radio"
                name="size"
                checked={size === "all"}
                value="all"
                onChange={this.handleChange}
              />
              <label>All</label>
              <br />
            </div>
            <input
              type="text"
              className="form-control w-25"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Data Set Name"
            />

            <br />
            <button
              type="submit"
              className="btn btn-light"
              onChange={this.onBtnChange}
            >
              Create Data Set
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CreateSearch;

/* <table className="table">
            <thead>
              <tr>
                <th>Attributes</th>
                <th>Gender</th>
                <th>Mortality</th>
                <th>Size</th>
              </tr>
            </thead>
          </table> */
