import {
  DELETE_TESTIMONIAL,
  SETUPDATE_TESTIMONIAL,
  SET_TESTIMONIAL,
  TESTIMONIAL_ERROR,
  TESTIMONIAL_LOADING,
} from "../actionTypes";

const initialState = {
  testimonial: [],
  error: null,
  update: {
    state: false,
    data: null,
  },
  loading: false,
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
    case SETUPDATE_TESTIMONIAL:
      return {
        ...state,
        update: action.payload,
      };
    case TESTIMONIAL_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export { testimonialReducer };
