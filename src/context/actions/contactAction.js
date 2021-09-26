import { isAuthenticated } from "../../helpers/auth";

const { default: axiosInstance } = require("../../helpers/axiosInstance");
const { SET_CONTACTS, SETCONTACTS_ERROR } = require("../actionTypes");

const setcontact = (data) => ({
  type: SET_CONTACTS,
  payload: data,
});

const setUpdateError = (err) => ({
  type: SETCONTACTS_ERROR,
  payload: err,
});

const getContact = () => {
  return (dispatch) => {
    axiosInstance
      .get("/contact/get")
      .then((response) => {
        dispatch(setcontact(response.data));
      })
      .catch((err) => console.log(err));
  };
};

const updateContact = (data) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .put("/contact/update", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(setcontact(data));
      })
      .catch((error) => {
        dispatch(setUpdateError(error.response));
      });
  };
};

export { getContact, updateContact, setUpdateError };
