import React from "react";
import { useStateValue } from "../../StateProvider";

function Profile() {
  const [{ user }] = useStateValue();
  return (
    <>
      {console.log(user)}
      <div className="container mb-5">
        <div className="row gutters-sm">
          <div className="col-md-4 mt-5 mb-3">
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
                    {user[0]
                      ? (user[0].gender === "M" && "Male") ||
                        (user[0].gender === "F" && "Female")
                      : ""}
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
      </div>
    </>
  );
}

export default Profile;
