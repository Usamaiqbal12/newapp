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