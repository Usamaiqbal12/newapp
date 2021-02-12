import React, { useEffect, useState } from "react";
import { getauthor } from "../../services/Api";
import RSkeleton from "../RSkeleton";

function Profile(props) {
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    const {
      match: { params },
    } = props;
    let mounted = true;
    getauthor(params.id).then((items) => {
      if (mounted) {
        setAuthor(items.data);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <>
      <div className="container mb-5">
        <div className="row gutters-sm">
          <div className="col-md-4 mt-5 mb-3">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src=  {author?
                author.photo != null
                  ? author.photo
                  : "/assets/defaultimage.png"
                : ""}
                alt="name"
                className="rounded-circle profilePicture"
              />
              <div className="mt-3">
                <h4 className="author__heading px-2 py-1">
                  {author ? author.first_name&&author.first_name.toUpperCase() : ''}{" "}
                  {author ? author.last_name&&author.last_name.toUpperCase() : ''}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="card mb-3">
              <div className="card-body login">
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author.first_name ? author.first_name : <RSkeleton />}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author.last_name ? author.last_name : <RSkeleton />}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Alias</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author.alias ? author.alias : <RSkeleton />}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Bio</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author.bio ? (author.bio):<RSkeleton />}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Attributes</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author.attribute ? author.attribute.map((v,i)=>{
                        return <span key={i} className='m-0 p-0' style={{display:window.screen.width<600&&'block'}}>{v}<b>, </b></span>
                      }):<RSkeleton />}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author.sex
                        ? (author.sex === "M" && "Male") ||
                          (author.sex === "F" && "Female")
                        : <RSkeleton />}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Date of Birth</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author.date_of_birth ? author.date_of_birth : <RSkeleton />}{" "}
                    </span>
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
