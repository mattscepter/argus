import { isAuthenticated } from "../../helpers/auth";

const { default: axiosInstance } = require("../../helpers/axiosInstance");
const {
  SET_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  TESTIMONIAL_ERROR,
  SETUPDATE_TESTIMONIAL,
  TESTIMONIAL_LOADING,
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

const setupdatetestimonial = (data) => ({
  type: SETUPDATE_TESTIMONIAL,
  payload: data,
});

const testimonialloading = (data) => ({
  type: TESTIMONIAL_LOADING,
  payload: data,
});

const getTestimonial = () => {
  return (dispatch) => {
    dispatch(testimonialloading(true));
    axiosInstance
      .get("/testimonial/get-all")
      .then((res) => {
        dispatch(
          settestimonial(
            res?.data.sort((p1, p2) => {
              return new Date(p2.updatedAt) - new Date(p1.updatedAt);
            })
          )
        );
        dispatch(testimonialloading(false));
      })
      .catch((err) => {
        dispatch(testimonialloading(false));
      });
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
    const { token } = isAuthenticated();
    axiosInstance
      .post("/testimonial/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(getTestimonial());
        dispatch(testimonialerror(true));
      })
      .catch((err) => {
        dispatch(testimonialerror(false));
      });
  };
};

const updateTestimonial = (data, id) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .put(`/testimonial/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(getTestimonial());
        dispatch(testimonialerror(true));
        dispatch(setupdatetestimonial({ state: false, data: null }));
      })
      .catch((err) => {
        dispatch(testimonialerror(false));
        dispatch(setupdatetestimonial({ state: false, data: null }));
      });
  };
};

export {
  getTestimonial,
  deleteTestimonial,
  addTestimonial,
  testimonialerror,
  setupdatetestimonial,
  updateTestimonial,
};
