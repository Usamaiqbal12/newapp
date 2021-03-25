import React, { useEffect, useState, useRef } from "react";
import { discussionmode } from "../../services/Api";
import { useHistory } from "react-router-dom";
import Loading from "../Loading";
const DiscussionMode = (props) => {
  const [values, setValues] = useState([]);
  const history = useHistory();
  const carouselRef = useRef(null);
  const [loading, setloading] = useState(true);
  const [pagination, setpagination] = useState(0);
  let c = 1;
  const {
    match: { params },
  } = props;
  useEffect(() => {
    let mounted = true;
    discussionmode(params.id).then((data) => {
      if (mounted) {
        setValues([...data.data]);
        setloading(false);
      }
    });
    return () => (mounted = false);
  }, []);
  const carouselArrow = () => {
    if (
      carouselRef &&
      carouselRef.current.children[0].className === "carousel-item  active"
    ) {
      setpagination(1);
    } else if (
      carouselRef &&
      carouselRef.current.children[values.length - 2].className ===
        "carousel-item false active"
    ) {
      setpagination(3);
    }
    else{
      setpagination(2)
    }
  };

  return (
    <React.Fragment>
      {loading && <Loading />}
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-ride="carousel"
        data-wrap={false}
        data-interval={false}
      >
        <div className="carousel-inner" ref={carouselRef}>
          {values
            ? values.map((v, i) => {
                return (
                  <div
                    key={i}
                    className={`carousel-item  ${c == 1 && "active"}`}
                  >
                    <h4 className="text-center pt-4 mb-4">
                      {" "}
                      <span className="px-3 py-2 bg-light rounded text-dark dataset__text">
                        Discussion Mode
                      </span>
                    </h4>
                    <div
                      className="container rounded mb-4"
                      style={{ backgroundColor: "#353429" }}
                    >
                      <div className="row gutters-sm align-items-center">
                        <div className="col-md-4 mt-4 mb-3">
                          <div className="d-flex flex-column align-items-center text-center">
                            <img
                              src={
                                v.author.photo == null
                                  ? "https://via.placeholder.com/150"
                                  : "http://localhost:8000" + v.author.photo
                              }
                              alt="name"
                              className=" profilePicture rounded"
                            />
                          </div>
                        </div>
                        <div className="col-md-8 mt-3 mb-2 rounded mt-md-0 ">
                          <div
                            className="card mb-0 mt-1"
                            style={{ backgroundColor: "#353429" }}
                          >
                            <div
                              className="card-body discussioninfo rounded"
                              style={{ backgroundColor: "#443F39" }}
                            >
                              <div className="row">
                                <div className="col-md-6 col-6 py-3">
                                  <h6 className="mb-2 text-white"> Name</h6>
                                  <div className="text-user_info">
                                    {v.author.short_name}
                                  </div>
                                </div>
                                <div className="col-md-6 col-6 py-3">
                                  <h6 className="mb-2 text-white">Alias</h6>
                                  <div className="text-user_info">
                                    {v.author.alias === null
                                      ? "None"
                                      : v.author.alias}
                                  </div>
                                </div>
                                <div className="col-md-6 col-6 py-3">
                                  <h6 className="mb-2 text-white">Morality</h6>
                                  <div className="text-user_info">
                                    {v.author.date_of_birth !== null
                                      ? "Living"
                                      : "Deceased"}
                                  </div>
                                </div>
                                <div className="col-md-6 col-6 py-3">
                                  <h6 className="mb-2 text-white">
                                    Attributes
                                  </h6>
                                  <div className="text-user_info">
                                    {v.author.attribute.length > 0
                                      ? v.author.attribute.map((v, i) => {
                                          return <span key={i}>{v}</span>;
                                        })
                                      : "None"}
                                  </div>
                                </div>
                                <div className="col-md-6 col-6 py-3">
                                  <h6 className="mb-2 text-white">Gender</h6>
                                  <div className="text-user_info">
                                    {(v.author.sex === "M" && "Male") ||
                                      (v.author.sex === "F" && "Female")}
                                  </div>
                                </div>
                                <div className="col-md-6 col-6 py-3">
                                  <h6 className="mb-2 text-white">
                                    Date of Birth
                                  </h6>
                                  <div className="text-user_info">
                                    {v.author.date_of_birth}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="d-none"> {(c = c + 1)} </span>
                    <div
                      className="container rounded mb-4 text-light"
                      style={{ backgroundColor: "#353429" }}
                    >
                      <div className="row">
                        <div className="col-12 mt-4">
                          <div className="quote-card_wrap position-relative">
                            <div className="quote-card ">
                              <h6 className="mb-0 font-normal font-italic text-light testimonial_txt">
                                &quot;{v.quote}&quot;
                              </h6>
                              <h6 className="testimonial_auth_name mb-0 text-right mt-2 text-capitalize text-light">
                                - {v.author.short_name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div>
                          <h4 className="w-100 pt-4 dataset__text">
                            {" "}
                            Questions:
                          </h4>
                        </div>
                      </div>
                      <ul className="questions_list list-unstyled mb-0">
                        {v.questions.map((v, i) => {
                          return (
                            <li className="" key={i}>
                              <span>
                                <b>{i + 1}</b>
                              </span>
                              {v.title}
                            </li>
                          );
                        })}
                      </ul>
                      <button
                        onClick={() => history.goBack()}
                        className="btn text-light mt-3 mb-5 col-12 col-sm-3"
                        style={{ backgroundColor: "#443F39" }}
                      >
                        Back to Dataset
                      </button>
                    </div>
                    <div className="text-center text-white">
                      Page {i + 1} of {values.length}{" "}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        {pagination!=0 && (
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            onClick={carouselArrow}
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="sr-only colors-control">Previous</span>
          </a>
        )}
        {pagination!=3 && (
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            onClick={carouselArrow}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        )}
      </div>
    </React.Fragment>
  );
};

export default DiscussionMode;
