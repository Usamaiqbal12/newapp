import React, { useEffect, useState } from "react";
import { discussionmode } from "../../services/Api";

const DiscussionMode = (props) => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const {
      match: { params },
    } = props;
    let mounted = true;

    discussionmode(params.id).then((data) => {
      if (mounted) {
        setValues([...data.data]);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <React.Fragment>
      {values
        ? values.map((v, i) => {
            return (
              <div key={i} className="container">
                <div className="row">
                  <div className="col-3 bg-light mt-4">
                    {/* <img src={data.Image} alt="abc" /> */}
                  </div>

                  <div className="col-9 bg-light mt-4">
                    <h3>Name: {v.author.short_name}</h3>
                    <h5>DOB: {v.author.date_of_birth}</h5>
                    <h5>
                      Alias: {v.author.alias === null ? "None" : v.author.alias}
                    </h5>
                    <h5>
                      Morality:{" "}
                      {v.author.date_of_birth !== null ? "Living" : "Deceased"}
                    </h5>
                    <h5> Attributes: {v.author.attribute.length > 0 ? (
                      v.author.attribute.map((v, i) => {
                        return <span key={i}>{v}</span>;
                      })
                    ) : (
                      'None'
                    )}
                    </h5>
                  </div>
                </div>
                <div className="row bg-light mt-10">
                  <div>
                    <h4>Quote :</h4>
                    <p className='p-3'>{v.quote}</p>
                  </div>
                </div>
                <div className="row bg-light">
                  <div>
                    <h4>Questions</h4>
                    <ol>
                      {v.questions.map((v, i) => {
                        return <li key={i}>{v.title}</li>;
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </React.Fragment>
  );
};

export default DiscussionMode;
