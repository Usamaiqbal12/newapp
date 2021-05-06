import { DockRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { getauthor } from "../../services/Api";
import RSkeleton from "../RSkeleton";

function Profile(props) {
  const [author, setAuthor] = useState([]);
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");
  useEffect(() => {
    const {
      match: { params },
    } = props;
    let authorDob = "";
    let authorDod = "";
    let mounted = true;
    getauthor(params.id).then((items) => {
      if (mounted) {
        setAuthor(items.data);
        let day = items.data.date_of_birth.split("-")[2];
        let month = items.data.date_of_birth.split("-")[1];
        let year = items.data.date_of_birth.split("-")[0];
        authorDob = month + "-" + day + "-" + year;
        setDob(authorDob);
        if (items.data.date_of_death) {
          day = items.data.date_of_death.split("-")[2];
          month = items.data.date_of_death.split("-")[1];
          year = items.data.date_of_death.split("-")[0];
          authorDod = month + "-" + day + "-" + year;
          setDod(authorDod);
        }
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row gutters-sm">
          <div className="col-md-4 mt-5 mb-3">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src={
                  author
                    ? author.photo != null
                      ? author.photo
                      : "/assets/defaultimage.png"
                    : ""
                }
                alt="name"
                className="rounded-circle profilePicture"
              />
              <div className="mt-3">
                <h4 className="author__heading px-2 py-1">
                  {author
                    ? author.first_name && author.first_name.toUpperCase()
                    : ""}{" "}
                  {author
                    ? author.last_name && author.last_name.toUpperCase()
                    : ""}{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-4 rounded">
            <div
              className="card mb-3 text-light "
              style={{ backgroundColor: "#443F39" }}
            >
              <div className="card-body" style={{ backgroundColor: "#443F39" }}>
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-8 col-6">
                    <span className="profile__info">
                      {" "}
                      {author.first_name ? (
                        author.first_name
                      ) : (
                        <RSkeleton />
                      )}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-8 col-6">
                    <span className="profile__info">
                      {" "}
                      {author.last_name ? author.last_name : <RSkeleton />}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <h6 className="mb-0">Alias</h6>
                  </div>
                  <div className="col-sm-8 col-6 ">
                    <span className="profile__info">
                      {" "}
                      {author.alias ? author.alias : "None "}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <h6 className="mb-0">Bio</h6>
                  </div>
                  <div className="col-sm-8 col-6">
                    <span className="profile__info">
                      {" "}
                      {author.bio ? author.bio : "None"}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <h6 className="mb-0">Attributes</h6>
                  </div>
                  <div className="col-sm-8 col-6 ">
                    <span className="profile__info">
                      {" "}
                      {author.attribute ? (
                        author.attribute.map((v, i) => {
                          return (
                            <span
                              key={i}
                              className="m-0 p-0"
                              style={{
                                display: window.screen.width < 600 && "block",
                              }}
                            >
                              {v+" "}
                            </span>
                          );
                        })
                      ) : (
                        <RSkeleton />
                      )}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-8 col-6 ">
                    <span className="profile__info">
                      {" "}
                      {author.sex ? (
                        (author.sex === "M" && "Male") ||
                        (author.sex === "F" && "Female")
                      ) : (
                        <RSkeleton />
                      )}{" "}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <h6 className="mb-0">Date of Birth</h6>
                  </div>
                  <div className="col-sm-8 col-6">
                    <span className="profile__info">
                      {" "}
                      {author.date_of_birth ? dob : <RSkeleton />}{" "}
                    </span>
                  </div>
                </div>
                {author.date_of_death && (
                  <>
                    <hr />
                    <div className="row">
                      <div className="col-sm-4 col-6">
                        <h6 className="mb-0">Date of Death</h6>
                      </div>
                      <div className="col-sm-8 col-6">
                        <span className="profile__info">
                          {" "}
                          {author.date_of_death ? dod : <RSkeleton />}{" "}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
