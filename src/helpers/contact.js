import axiosInstance from "./axiosInstance";

export const updateContact = async (data, token) => {
  const url = `/contact/update`;
  return axiosInstance(url, data, {
    headers: {
      Accept: "application/JSON",
      "Content-Type": "application/JSON",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getContact = () => {
  const url = `/contact/get`;
  axiosInstance(url, {
    method: "GET",
    headers: {
      Accept: "application/JSON",
      "Content-Type": "application/JSON",
    },
  })
    .then((response) => {
      localStorage.setItem("contact", JSON.stringify(response.data));
    })
    .catch((err) => console.log(err));
};
