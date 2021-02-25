import React, { useEffect, useState } from "react";
import {
  authorsList,
  createdataset,
  datasetListFunc,
  updatedataset,
} from "../../services/Api";
import { TextField } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router-dom";
import RSkeleton from "../RSkeleton";
import Loading from "../Loading";
function Manual(props) {
  const [loading, setLoading] = useState(false);
  const {
    match: { params },
  } = props;
  const history = useHistory()
  const [, dispatch] = useStateValue();
  const [authors, setauthorsList] = useState([]);
  const [authorsId, setauthorsId] = useState([]);
  const [authorsData, setauthorsData] = useState({
    name: "",
    type_dataset: "manual",
    authors: [],
  });
  useEffect(() => {
    let mounted = true;
    authorsList().then((items) => {
      if (mounted) {
        setauthorsList(items.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const handleChange = (e) => {
    authorsId.push(parseInt(e.target.value));
    setauthorsId([...authorsId]);
    setauthorsData({ ...authorsData, authors: [...authorsId] });
  };
  const handleDatasetName = (e) => {
    setauthorsData({ ...authorsData, name: e.target.value });
  };
  const submit = (e) => {
    
    if (authorsData.authors.length > 0) {
      if (authorsData.authors.name !== "") {
        setLoading(true)
        if (props.location.pathname.split("/")[1] === "dataseteditmanual") {
          updatedataset(JSON.stringify(authorsData), params.id).then(data=>{
            datasetListFunc().then((items) => {
              dispatch({
                type: "ADDDATASET",
                data: items.data,
              });
              history.push('/dataset')
              setLoading(false)
            });
            
          })
          
        }
        else{
          createdataset(JSON.stringify(authorsData)).then(data=>{
            datasetListFunc().then((items) => {
              dispatch({
                type: "ADDDATASET",
                data: items.data,
              });
              history.push('/dataset')
              setLoading(false)
            });
            
          })
         
        }
      
        

      } else {
        alert("Please Type Dataset Name !");
      }
    } else {
      alert("Please Select Any Author !");
    }
  };
  return (
    <div className='container'>
    <div className="mt-4" style={{overflowY: 'auto', height: '350px'}} >
      {loading&&<Loading />}
     
      <table className="table table-hover table-dark">
        <thead className="thead"  style={{backgroundColor:'#443F39'}}>
          <tr>
            <th style={{position: 'sticky', top: -1,backgroundColor:'#443F39'}} scope="col">#</th>
            <th style={{position: 'sticky', top: -1,backgroundColor:'#443F39'}} scope="col">First Name</th>
            <th style={{position: 'sticky', top: -1,backgroundColor:'#443F39'}} scope="col">Last Name</th>
            <th style={{position: 'sticky', top: -1,backgroundColor:'#443F39'}} scope="col">Select</th>
          </tr>
        </thead>
        {/* <div > */}
        <tbody >
     
          {authors.length>1
            ? authors.map((v, i) => {
                return (
                  <tr key={i} style={{ cursor: "pointer",fontFamily:'cursive' }}>
                    <th scope="row">{i + 1}</th>
                    <th>{v.first_name}</th>
                    <th>{v.last_name}</th>

                    <th className="px-4">
                      <input
                        type="checkbox"
                        value={v.id}
                        onChange={handleChange}
                      />
                    </th>
                  </tr>
                );
              })
            : <>
             <tr>
                <th scope="row">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
              </tr>
              <tr>
                <th scope="row">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th className="pl-4">
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
                <th>
                  <RSkeleton width={window.screen.width<600?30:100} />
                </th>
              </tr>
            </>}
     
        </tbody>
        {/* </div> */}
      </table>
      </div>
          <TextField
          autoComplete="off"
          name="name"
          variant="filled"
          required
          color={'secondary'}
          value={authorsData.name}
          onChange={handleDatasetName}
          label="Dataset Name"
          size={'small'}
          className='bg-light text-light mt-3 col-md-3  rounded'
        />
        <br/>
      <button onClick={submit} className='btn mt-2 py-2 text-light px-4 col-12 col-md-3 mb-5' style={{backgroundColor:'#443F39'}}>
        {props.location.pathname.split("/")[1] === "dataseteditmanual"
          ? "Update"
          : "Create"}
      </button>
    
    </div>
  );
}

export default Manual;
