import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import RSkeleton from "../RSkeleton";

function Profile() {
  const [{ user }] = useStateValue();
  const dateofbirth=(dob)=>{
    let day = dob.split("-")[2]
    let month = dob.split("-")[1]
    let year = dob.split("-")[0]
    return month+"-"+day+"-"+year
  }
  const history= useHistory()
  return (
    <>
      <div className="container mb-5 mt-5 userprofile">
        <div className="row gutters-sm ">
          <div className="col-md-4 mt-4 mb-3">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={
                  user[0]
                    ? user[0].profile_picture != null
                      ? user[0].profile_picture
                      : "/assets/defaultimage.png"
                    : '/assets/defaultimage.png'
                }
                alt="name"
                className="rounded-circle profilePicture"
              />
              <div className="mt-3">
                <h4 className="author__heading px-2 py-1">
                  {user[0]
                    ? user[0].first_name && user[0].first_name.toUpperCase()
                    : ""}{" "}
                  {user[0]
                    ? user[0].first_name && user[0].last_name.toUpperCase()
                    : "Loading..."}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="card mb-3" style={{backgroundColor:'#443F39'}}>
              <div className="card-body text-light" >
                <div className="row">
                  <div className="col-6 col-sm-4">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-6 col-sm-8">
                    <span className="profile__info">
                      {" "}
                      {user[0] ? user[0].first_name : <RSkeleton />}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6 col-sm-4">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-6 col-sm-8">
                    <span className="profile__info">
                      {" "}
                      {user[0] ? user[0].last_name : <RSkeleton />}
                    </span>{" "}
                  </div>
                </div>
                <hr  />
                <div className="row">
                  <div className="col-6 col-sm-4">
                    <h6 className="mb-0">Nick Name</h6>
                  </div>
                  <div className="col-6 col-sm-8">
                  <span className="profile__info">
                    {user[0] ? user[0].nickname : <RSkeleton />}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6 col-sm-4">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-6 col-sm-8">
                    <span className="profile__info">
                      {" "}
                      {user[0] ? user[0].email : <RSkeleton />}
                    </span>{" "}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6 col-sm-4">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-6 col-sm-8">
                    <span className="profile__info">
                      {" "}
                      {user[0]
                        ? (user[0].gender === "M" && "Male") ||
                          (user[0].gender === "F" && "Female")
                        : <RSkeleton />}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6 col-sm-4">
                    <h6 className="mb-0">Date of Birth</h6>
                  </div>
                  <div className="col-6 col-sm-8">
                    <span className="profile__info">
                      {" "}
                      {user[0] ? dateofbirth(user[0].date_of_birth) : <RSkeleton />}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ml-2'>
      <button onClick={()=>history.push('/editprofile')} className='btn btn-secondary col-md-2'>Edit Profile</button>
      </div>
    </>
  );
}

export default Profile;
