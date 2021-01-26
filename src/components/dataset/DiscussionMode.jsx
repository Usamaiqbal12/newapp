import React, { useEffect, useState } from "react";
import { discussionmode } from "../../services/Api";
import { useHistory } from "react-router-dom";
const DiscussionMode = (props) => {
  const [values, setValues] = useState([]);
  const history = useHistory();
  let c = 1;
  useEffect(() => {
    const {
      match: { params },
    } = props;
    let mounted = true;

    discussionmode(params.id).then((data) => {
      if (mounted) {
        setValues([...data.data]);
        console.log(data);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-ride="carousel"
        data-interval={false}
      >
        <h4 className="text-center pt-4">Discussion Mode</h4>

        <div className="carousel-inner container">
          {values
            ? values.map((v, i) => {
                return (
                  <div
                    key={i}
                    className={`carousel-item mt-2 px-4 mb-4 bg-light ${
                      c == 1 && "active"
                    }`}
                  >
                    <div className="container px-5 mb-5">
                      <div className="row gutters-sm">
                        <div className="col-md-4 mt-4 mb-3">
                          <div className="d-flex flex-column align-items-center text-center">
                            <img
                              src={"http://localhost:8000" + v.author.photo}
                              alt="name"
                              className="rounded-circle"
                              width="250"
                              height="300"
                            />
                          </div>
                        </div>
                        <div className="col-md-8 mt-3">
                          <div className="card mb-3">
                            <div className="card-body bg-light">
                              <div className="row">
                                <div className="col-sm-3">
                                  <h6 className="mb-0"> Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                  {v.author.short_name}
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3">
                                  <h6 className="mb-0">Alias</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                  {v.author.alias === null
                                    ? "None"
                                    : v.author.alias}
                                </div>
                              </div>
                              <hr />

                              <div className="row">
                                <div className="col-sm-3">
                                  <h6 className="mb-0">Morality</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                  {v.author.date_of_birth !== null
                                    ? "Living"
                                    : "Deceased"}
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3">
                                  <h6 className="mb-0">Attributes</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                  {v.author.attribute.length > 0
                                    ? v.author.attribute.map((v, i) => {
                                        return <span key={i}>{v}</span>;
                                      })
                                    : "None"}
                                </div>
                              </div>

                              <hr />
                              <div className="row">
                                <div className="col-sm-3">
                                  <h6 className="mb-0">Gender</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                  {(v.author.sex === "M" && "Male") ||
                                    (v.author.sex === "F" && "Female")}
                                </div>
                              </div>

                              <hr />
                              <div className="row">
                                <div className="col-sm-3">
                                  <h6 className="mb-0">Date of Birth</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                  {v.author.date_of_birth}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="d-none"> {(c = c + 1)} </span>
                    <div className="container px-5">
                      <div className="row mt-10">
                        <blockquote>
                          <h4 className="w-100 pl-3">Quote :</h4>
                          <p className="ml-5 quotes">{v.quote}</p>
                        </blockquote>
                      </div>
                      <div className="row">
                        <div>
                          <h4 className="w-100 pl-3">Questions :</h4>
                          <ol className="pl-5 ml-3 questions">
                            {v.questions.map((v, i) => {
                              return <li key={i}>{v.title}</li>;
                            })}
                          </ol>
                        </div>
                      </div>
                      <button
                        onClick={() => history.goBack()}
                        className="btn btn-secondary my-3"
                      >
                        Back to Dataset
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="sr-only colors-control">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default DiscussionMode;
