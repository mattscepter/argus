const {
  SET_EOMADMIN,
  EOM_ERROR,
  DELETE_EOM,
  SET_EOM,
} = require("../actionTypes");

const initialState = {
  eom: null,
  eomAdmin: [],
  error: null,
};

const eomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EOM:
      return {
        ...state,
        eom: action.payload,
      };
    case SET_EOMADMIN:
      return {
        ...state,
        eomAdmin: action.payload,
      };
    case EOM_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_EOM:
      return {
        ...state,
        eomAdmin: [...state.eomAdmin.filter((c) => c._id !== action.payload)],
      };
    default:
      return state;
  }
};

export { eomReducer };
