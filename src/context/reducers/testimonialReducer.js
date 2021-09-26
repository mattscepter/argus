import {
  DELETE_TESTIMONIAL,
  SET_TESTIMONIAL,
  TESTIMONIAL_ERROR,
} from "../actionTypes";

const initialState = {
  testimonial: [],
  error: null,
};

const testimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TESTIMONIAL:
      return {
        ...state,
        testimonial: action.payload,
      };
    case DELETE_TESTIMONIAL:
      return {
        ...state,
        testimonial: [
          ...state.testimonial.filter((c) => c._id !== action.payload),
        ],
      };
    case TESTIMONIAL_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { testimonialReducer };
