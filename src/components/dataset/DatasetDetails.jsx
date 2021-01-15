import React, { useState, useEffect } from "react";
import { getDataSet } from "../../services/Api";
function DatasetDetails(props) {
  const [foundedValue, setfoundedValue] = useState([]);
  useEffect(() => {
    const {
      match: { params },
    } = props;
    let mounted = true;
    getDataSet(params.id).then((items) => {
      if (mounted) {
     setfoundedValue(
        items.data
        ) 
      }
    });
    return () => (mounted = false);
   
  }, []);

  return (
    <div>{foundedValue && <>
    <h2>Name:{foundedValue.dataset_name}</h2>
    <h2>Name:{foundedValue.dataset_name}</h2>
    <h2>authors:{foundedValue.author&&foundedValue.author.map((v,i)=>{
        return <p key={i}>{v.first_name} {v.last_name}</p>
    })}</h2>
    </>
    }

    </div>
  );
}

export default DatasetDetails;
