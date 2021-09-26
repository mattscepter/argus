const { isAuthenticated } = require("../../helpers/auth");
const { default: axiosInstance } = require("../../helpers/axiosInstance");
const {
  SET_EOM,
  SET_EOMADMIN,
  EOM_ERROR,
  DELETE_EOM,
} = require("../actionTypes");

const seteom = (data) => ({
  type: SET_EOM,
  payload: data,
});

const seteomAdmin = (data) => ({
  type: SET_EOMADMIN,
  payload: data,
});

const eomError = (data) => ({
  type: EOM_ERROR,
  payload: data,
});

const deleteeom = (data) => ({
  type: DELETE_EOM,
  payload: data,
});

const getEOM = () => {
  return (dispatch) => {
    axiosInstance
      .get("/eom/get")
      .then((res) => {
        dispatch(seteom(res.data));
      })
      .catch((err) => {});
  };
};

const getEOMAdmin = () => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .get("/eom/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(seteomAdmin(res.data));
      })
      .catch((err) => {});
  };
};

const createEOM = (data) => {
  return (dispatch) => {
    axiosInstance
      .post("/eom/create", data)
      .then(() => {
        dispatch(getEOMAdmin());
        dispatch(eomError(true));
      })
      .catch((err) => eomError(false));
  };
};

const deleteEOM = (id) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .delete(`/eom/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(deleteeom(id));
      })
      .catch((err) => {});
  };
};

export { createEOM, getEOMAdmin, eomError, deleteEOM, getEOM };
