import React from "react";
import { useStateValue } from "../../StateProvider";

function Profile() {
  const [{ user }] = useStateValue();

  return (
    <>
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mt-5 mb-3">
            {/* <div class="card"> */}
            {/* <div class="card-body"> */}
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={user[0] ? user[0].profile_picture : ""}
                alt="name"
                className="rounded-circle"
                width="250"
              />
              <div className="mt-3">
                <h4>
                  {user[0] ? user[0].first_name : ""}{" "}
                  {user[0] ? user[0].last_name : ""}{" "}
                </h4>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="col-md-8 mt-3">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user[0] ? user[0].first_name : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user[0] ? user[0].last_name : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Nick Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user[0] ? user[0].nickname : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user[0] ? user[0].email : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user[0] ? user[0].gender : ""}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date of Birth</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user[0] ? user[0].date_of_birth : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row bg-light mt-10">
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
        </div> */}
      </div>
    </>
  );
}

export default Profile;
