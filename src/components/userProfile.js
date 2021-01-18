import React, { Component } from "react";
class UserProfile extends Component {
  state = {
    id: 1,
    name: "Jonathan John",
    dateOfBirth: "01/09/2000",
    alias: "alias",
    deceased: "Deceased",
    attributes: "Attrib 1 Attrib 2 Attrib 3",
    Image: "/assets/0.jpg",
    bio:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    quotes:
      "Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  };

  render() {
    return (
      <div className="container">
        {console.log(this.props.getDataSet())}
        <div className="row">
          <div className="col-3 bg-light mt-4">
            <img src={this.state.Image} alt="abc" />
          </div>
          <div className="col-9 bg-light mt-4">
            <h3>{this.state.name}</h3>
            <h5>{this.state.dateOfBirth}</h5>
            <h5>{this.state.alias}</h5>
            <h5>{this.state.deceased}</h5>
            <h5>{this.state.attributes}</h5>
          </div>
        </div>
        <div className="row bg-light mt-10">
          <div>
            <h2>BIO</h2>
            <p>{this.state.bio}</p>
          </div>
        </div>
        <div className="row bg-light">
          <h2>Quotes</h2>
          <p>{this.state.quotes}</p>
        </div>
        <div className="row">
          <h2>Additional Resourses</h2>

          <input
            className="form-control w-20"
            type="text"
            aria-label="Search"
          ></input>

          <input
            className="form-control"
            type="text"
            aria-label="Search"
          ></input>
        </div>
      </div>
    );
  }
}

export default UserProfile;
