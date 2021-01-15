

const API_URL = "http://localhost:8000/";

const createdataset = (e) => {
  return fetch(`${API_URL}dataset/create/`, {
    method: "post",
    body: e,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const authorsList = (e) => {
  return fetch(`${API_URL}author/list`, {
    method: "get",
  }).then((data) => data.json());
};
const datasetListFunc = (e) => {
  return fetch(`${API_URL}dataset/list`, {
    method: "get",
    headers:{
    'Authorization': `Token ${JSON.parse(localStorage.getItem('jwt'))} `,
    }
  }).then((data) => data.json());
};

const getDataSet = (e) => {
  return fetch(`${API_URL}dataset/authorslist/${e}`, {
    method: "get",
  }).then((data) => data.json());
};

const signIn = (e) => {
  return fetch(`${API_URL}user/login/`, {
    method: "post",
    body: e,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};

export const signup = (user) => {
  return fetch(`${API_URL}user/signup/`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
    //TODO: compare JWT with database json token
  } else {
    return false;
  }
};
export { createdataset, authorsList, datasetListFunc, getDataSet, signIn };
