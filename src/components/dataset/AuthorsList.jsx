import React from "react";
import { useHistory } from "react-router-dom";
import "./dataset.css";
function AuthorsList(props) {
  const { foundedValue } = props;
  const history = useHistory()
  return (
    <div>
      <h2 className="px-3 pb-2 w-100 text-center"> <span className='px-4 py-1 rounded author__heading'>Authors</span></h2>
      <table className="table table-hover bg-white">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Sex</th>
            <th scope="col">Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {foundedValue.author &&
            foundedValue.author.map((v, i) => {
              return (
                <tr
                  onClick={() => history.push(`/authorprofile/${v.id}`)}
                  key={i}
                  style={{ cursor: "pointer",fontFamily:'cursive',fontSize:'17px' }}
                >
                  <th scope="row">{i + 1}</th>
                  <td>{v.first_name}</td>
                  <td>{v.last_name}</td>
                  <td>{(v.sex==='M'&&'Male')||(v.sex==='F'&&'Female')}</td>
                  <td>{v.date_of_birth}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AuthorsList;
