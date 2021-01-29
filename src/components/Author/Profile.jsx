import React, { useEffect, useState } from "react";
import { getauthor } from "../../services/Api";

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
                src={author ? author.photo : ""}
                alt="name"
                className="rounded-circle profilePicture"
              />
              <div className="mt-3">
                <h4 className="author__heading px-2 py-1">
                  {author ? author.first_name : ""}{" "}
                  {author ? author.last_name : ""}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-3">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author ? author.first_name : ""}{" "}
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
                      {author ? author.last_name : ""}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Nick Name</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author ? author.nickname : ""}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 col-6 text-secondary">
                    <span className="profile__info">
                      {" "}
                      {author ? author.email : ""}{" "}
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
                      {author
                        ? (author.gender === "M" && "Male") ||
                          (author.gender === "F" && "Female")
                        : ""}{" "}
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
                      {author ? author.date_of_birth : ""}{" "}
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
