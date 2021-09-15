import { combineReducers } from "redux";
import { clientReducer } from "./reducers/adminReducer/clientReducer";
import { contactReducer } from "./reducers/contactReducer";
import { eomReducer } from "./reducers/eomReducer";
import { testimonialReducer } from "./reducers/testimonialReducer";

const rootReducer = combineReducers({
  contact: contactReducer,
  testimonial: testimonialReducer,
  eom: eomReducer,
  client: clientReducer,
});

export default rootReducer;
