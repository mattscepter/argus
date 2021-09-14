import { isAuthenticated } from "../../helpers/auth";

const { default: axiosInstance } = require("../../helpers/axiosInstance");
const {
  SET_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  TESTIMONIAL_ERROR,
} = require("../actionTypes");

const settestimonial = (data) => ({
  type: SET_TESTIMONIAL,
  payload: data,
});

const deletetestimonial = (id) => ({
  type: DELETE_TESTIMONIAL,
  payload: id,
});

const testimonialerror = (data) => ({
  type: TESTIMONIAL_ERROR,
  payload: data,
});

const getTestimonial = () => {
  return (dispatch) => {
    axiosInstance
      .get("/testimonial/get-all")
      .then((res) => {
        dispatch(
          settestimonial(
            res?.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          )
        );
      })
      .catch((err) => {});
  };
};

const deleteTestimonial = (id) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .delete(`/testimonial/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(deletetestimonial(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addTestimonial = (data) => {
  return (dispatch) => {
    axiosInstance
      .post("/testimonial/create", data)
      .then(() => {
        dispatch(getTestimonial());
        dispatch(testimonialerror(true));
      })
      .catch((err) => {
        dispatch(testimonialerror(false));
      });
  };
};

export { getTestimonial, deleteTestimonial, addTestimonial, testimonialerror };
