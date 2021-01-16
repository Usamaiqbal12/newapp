import React, { useState } from "react";

const DiscussionMode = () => {
  const [data] = useState({
    id: 1,
    name: "Jonathan John",
    dateOfBirth: "01/09/2000",
    alias: "alias",
    deceased: "Deceased",
    attributes: "Attrib 1 Attrib 2 Attrib 3",
    Image: "/assets/0.jpg",
    quotes: { qone: "hte one quote", qtwo: "the second quote" },
    questions: {
      ques1: "This is Question 1",
      ques2: "this is question 2",
      ques3: "this is questuion 3",
    },
  });
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-3 bg-light mt-4">
            <img src={data.Image} alt="abc" />
          </div>

          <div className="col-9 bg-light mt-4">
            <h3>{data.name}</h3>
            <h5>{data.dateOfBirth}</h5>
            <h5>{data.alias}</h5>
            <h5>{data.deceased}</h5>
            <h5>{data.attributes}</h5>
          </div>
        </div>
        <div className="row bg-light mt-10">
          <div>
            <h2>Quotes</h2>
            <p>{data.quotes.qone}</p>
            <p>{data.quotes.qtwo}</p>
          </div>
        </div>
        <div className="row bg-light">
          <div>
            <h2>Questions</h2>
            <p>{data.questions.ques1}</p>
            <p>{data.questions.ques2}</p>
            <p>{data.questions.ques3}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DiscussionMode;
