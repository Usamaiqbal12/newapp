const API_URL = "http://localhost:8000/";

export const getUser = (e) => {
  return fetch(`${API_URL}user/getuser2`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  }).then((data) => data.json());
};

export const updateUser = (e, id) => {
  return fetch(`${API_URL}user/updateuser/`, {
    method: "put",
    body: e,
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  }).then((data) => data.json());
};

export const facebookLogin = (e) => {
  return fetch(`${API_URL}user/facebooklogin/`, {
    method: "post",
    body: JSON.stringify(e),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};
export const googleLogin = (e) => {
  return fetch(`${API_URL}user/googlelogin/`, {
    method: "POST",
    body: JSON.stringify(e),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};
