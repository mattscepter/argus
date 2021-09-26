const { SET_CONTACTS, SETCONTACTS_ERROR } = require("../actionTypes");

const initialState = {
  email: "",
  phoneNumber: "",
  address: "",
  error: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
      };
    case SETCONTACTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { contactReducer };
