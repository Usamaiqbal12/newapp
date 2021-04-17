import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import RSkeleton from "../RSkeleton";
import "./dataset.css";
function AuthorsList(props) {
  const { foundedValue } = props;
  const dateofbirth=(dob)=>{
    let day = dob.split("-")[2]
    let month = dob.split("-")[1]
    let year = dob.split("-")[0]
    return month+"-"+day+"-"+year
  }
  const history = useHistory()
  return (
    <div >
      <h2 className="px-3 pb-2 w-100 text-center"> <span className='px-4 py-1 rounded author__heading'>Authors</span></h2>
      <div  style={{ 
      height: '500px', 
      overflowX: 'hidden',
      overflowY: 'auto' }}>
      <table className="table table-hover table-dark rounded">
        <thead className="thead text-light" style={{backgroundColor:'#443F39'}}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Sex</th>
            <th scope="col">Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {foundedValue.author ?
            foundedValue.author.map((v, i) => {
              return (
                <tr
                  onClick={() => history.push(`/authorprofile/${v.id}`)}
                  key={i}
                  style={{ cursor: "pointer", fontFamily: "monospace",fontSize:window.screen.width<600?'0.8rem':'1.2rem',fontWeight:1000 }}
                >
                  <th scope="row">{i + 1}</th>
                  <td>{v.first_name}</td>
                  <td>{v.last_name}</td>
                  <td>{(v.sex==='M'&&'Male')||(v.sex==='F'&&'Female')}</td>
                  <td>{dateofbirth(v.date_of_birth)}</td>
                </tr>
              );
            }):
            <>
             <tr>
                <td scope="row">
                  <RSkeleton width={window.screen.width<600?30:70} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
                <td className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <RSkeleton width={window.screen.width<600?30:70} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
                <td className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <RSkeleton width={window.screen.width<600?30:70} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100}/>
                </td>
                <td className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100}/>
                </td>
                <td>
                  <RSkeleton width={window.screen.width<600?30:100}/>
                </td>
              </tr>
            </>}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default AuthorsList;
