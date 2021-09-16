const { SET_CONTACTS, CONTACT_ALERT } = require("../../actionTypes");

const initialState = {
  email: "",
  phoneNumber: "",
  address: "",
  contactalert: {
    success: null,
    message: "",
  },
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
    case CONTACT_ALERT:
      return {
        ...state,
        contactalert: action.payload,
      };
    default:
      return state;
  }
};

export { contactReducer };
