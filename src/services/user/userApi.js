const API_URL = "http://localhost:8000/";

export const getUser = async(e) => {
    return await fetch(`${API_URL}user/getuser2`, {
      method: "get",
      headers: {
        Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
      },
    })
      .then((data) => data.json());
  };

export const updateUser =(e,pk)=>{
  return fetch(`${API_URL}user/updateuser/${pk}/`, {
    method: "put",
    body:e,
    headers: {
      // "Content-Type": "application/json",
      'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL',
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  })
    .then((data) => data.json());
}

export const facebookLogin=e=>{
  return fetch(`${API_URL}user/facebooklogin/`, {
    method: "post",
    body:JSON.stringify(e),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json());
}
export const googleLogin=(e)=>{
  return fetch(`${API_URL}user/googlelogin/`, {
    method: "POST",
    body:JSON.stringify(e),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json());
}