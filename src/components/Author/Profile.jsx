import React, { useEffect } from 'react'
import { getauthor } from '../../services/Api';

function Profile(props) {
    useEffect(()=>{
        const {
            match: { params },
          } = props;
          let mounted = true;
          getauthor(params.id).then((items)=>{
            if (mounted) {
                console.log(items.data)
            //    const author={

            //    };
          }
        })
          return () => (mounted = false);
    },[])
    return (
        <div>
        author
        </div>
    )
}

export default Profile
