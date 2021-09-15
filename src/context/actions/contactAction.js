import { isAuthenticated } from "../../helpers/auth";

const { default: axiosInstance } = require("../../helpers/axiosInstance");
const {
  SET_CONTACTS,
  SETCONTACTS_ERROR,
  CONTACT_ALERT,
} = require("../actionTypes");

const setcontact = (data) => ({
  type: SET_CONTACTS,
  payload: data,
});

const contactAlert = (data) => ({
  type: CONTACT_ALERT,
  payload: data,
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
        dispatch(
          contactAlert({
            success: true,
            message: "Contact updated successfully",
          })
        );
        dispatch(setcontact(data));
      })
      .catch((error) => {
        dispatch(
          contactAlert({ success: true, message: "Error adding successfully" })
        );
      });
  };
};

export { getContact, updateContact, contactAlert };
