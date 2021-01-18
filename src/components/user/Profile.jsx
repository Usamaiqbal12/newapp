import React from "react";
import { useStateValue } from "../../StateProvider";
function Profile() {
    const [{user},] = useStateValue()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 bg-light mt-4">
            <img src={user[0]?user[0].profile_picture:''} className='w-100' alt="abc" />
          </div>
          <div className="col-9 bg-light mt-4">
            <h5>First Name: {user[0]?user[0].first_name:''}</h5>
            <h5>Last Name: {user[0]?user[0].last_name:''}</h5>
            <h5>Nickname: {user[0]?user[0].nickname:''}</h5>
            <h5>Email: {user[0]?user[0].email:''}</h5>
            <h5>Gender: {user[0]?user[0].gender:''}</h5>
            <h5>Date Of Birth: {user[0]?user[0].date_of_birth:''}</h5>
            {/* <h5>{this.state.alias}</h5> */}
            {/* <h5>{this.state.deceased}</h5> */}
            {/* <h5>{this.state.attributes}</h5> */}
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
