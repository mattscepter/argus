const { isAuthenticated } = require("../../helpers/auth");
const { default: axiosInstance } = require("../../helpers/axiosInstance");
const {
  SET_EOM,
  SET_EOMADMIN,
  DELETE_EOM,
  SETUPDATE_EOM,
  EOM_LOADING,
  EOM_ALERT,
} = require("../actionTypes");

const seteom = (data) => ({
  type: SET_EOM,
  payload: data,
});

const seteomAdmin = (data) => ({
  type: SET_EOMADMIN,
  payload: data,
});

const eommessage = (data) => ({
  type: EOM_ALERT,
  payload: data,
});
const deleteeom = (data) => ({
  type: DELETE_EOM,
  payload: data,
});

const setupdateeom = (data) => ({
  type: SETUPDATE_EOM,
  payload: data,
});

const eomloading = (data) => ({
  type: EOM_LOADING,
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
    dispatch(eomloading(true));
    const { token } = isAuthenticated();
    axiosInstance
      .get("/eom/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(seteomAdmin(res.data));
        dispatch(eomloading(false));
      })
      .catch((err) => {
        dispatch(eomloading(false));
      });
  };
};

const createEOM = (data) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .post("/eom/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.error) {
          dispatch(
            eommessage({
              success: false,
              message: res.data.error,
            })
          );
        } else {
          dispatch(getEOMAdmin());
          dispatch(
            eommessage({
              success: true,
              message: "Employee of the month added successfully",
            })
          );
        }
      })
      .catch((err) =>
        dispatch(
          eommessage({
            success: false,
            message: "Error adding employee of the month",
          })
        )
      );
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
const updateEOM = (data, id) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .put(`/eom/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(getEOMAdmin());
        dispatch(
          eommessage({
            success: true,
            message: "Employee of the month updated successfully",
          })
        );
        dispatch(setupdateeom({ state: false, data: null }));
      })
      .catch((err) => {
        dispatch(
          eommessage({
            success: false,
            message: "Error updating employee of the month",
          })
        );
        dispatch(setupdateeom({ state: false, data: null }));
      });
  };
};

export {
  createEOM,
  getEOMAdmin,
  eommessage,
  deleteEOM,
  getEOM,
  setupdateeom,
  updateEOM,
};
