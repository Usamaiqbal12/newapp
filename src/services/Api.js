const API_URL = "http://localhost:8000/";
// const API_URL = "http://ec2-13-59-99-30.us-east-2.compute.amazonaws.com:8000/";

const createdataset = (e) => {
  return fetch(`${API_URL}dataset/create/`, {
    method: "post",
    body: e,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const updatedataset = (e, id) => {
  return fetch(`${API_URL}dataset/update/${id}`, {
    method: "put",
    body: e,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const deleteDatasetFunc = async (e) => {
  return await fetch(`${API_URL}dataset/delete/${e}`, {
    method: "delete",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  }).then((data) => data.json());
};
const authorsList = async () => {
  return await fetch(`${API_URL}author/list`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  }).then((data) => data.json());
};
const datasetListFunc = (e) => {
  return fetch(`${API_URL}dataset/list`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  }).then((data) => data.json());
};

const getDataSet = (e) => {
  return fetch(`${API_URL}dataset/authorslist/${e}`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  }).then((data) => data.json());
};

export const quoteOfTheDay = (e) => {
  return fetch(`${API_URL}quotes/quoteoftheday`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  }).then((data) => data.json());
};
// Auth--->
const signIn = (e) => {
  return fetch(`${API_URL}user/login/`, {
    method: "POST",
    body: e,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
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

export const discussionmode = (e) => {
  return fetch(`${API_URL}dataset/discussionmode/${e}`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};
export const getauthor = (e) => {
  return fetch(`${API_URL}author/${e}`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};
export const listAttributes = (e) => {
  return fetch(`${API_URL}dataset/attributes`, {
    method: "get",
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("jwt"))} `,
    },
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
