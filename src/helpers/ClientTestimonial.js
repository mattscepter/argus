import { API } from "../api";
import axios from "axios";

export const updateTestimonial = (data, token) => {
  const url = `${API}/contact/update`;
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/JSON",
      "Content-Type": "application/JSON",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTestimonial = () => {
  const url = `${API}/testimonial/get-all`;
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
