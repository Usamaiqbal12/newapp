import axios from 'axios'

const API_URL = 'http://localhost:8000/'

const createdataset=e=>{
    return fetch(`${API_URL}dataset/create/`,{
        method : "post",
        body : e,
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

export {createdataset}