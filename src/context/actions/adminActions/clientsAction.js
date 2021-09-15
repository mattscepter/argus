import { isAuthenticated } from "../../../helpers/auth";
import axiosInstance from "../../../helpers/axiosInstance";
import {
  CLIENTCAROUSEL_LOADING,
  CLIENT_CAROUSELALERT,
  DELETECLIENT_CAROUSEL,
  SETCLIENT_CAROUSEL,
  SETUPDATE_TESTIMONIAL,
} from "../../actionTypes";

const setclientcarousel = (data) => ({
  type: SETCLIENT_CAROUSEL,
  payload: data,
});

const deleteclientcarousel = (id) => ({
  type: DELETECLIENT_CAROUSEL,
  payload: id,
});

const clientcarouselAlert = (data) => ({
  type: CLIENT_CAROUSELALERT,
  payload: data,
});

const setupdateclientcarousel = (data) => ({
  type: SETUPDATE_TESTIMONIAL,
  payload: data,
});

const clientcarouselloading = (data) => ({
  type: CLIENTCAROUSEL_LOADING,
  payload: data,
});

const getClientCarousel = () => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    dispatch(clientcarouselloading(true));
    axiosInstance
      .get("/client/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(
          setclientcarousel(
            res?.data.sort((p1, p2) => {
              return new Date(p2.updatedAt) - new Date(p1.updatedAt);
            })
          )
        );
        dispatch(clientcarouselloading(false));
      })
      .catch((err) => {
        dispatch(clientcarouselloading(false));
      });
  };
};

const deleteClientCarousel = (id) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .delete(`/client/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(deleteclientcarousel(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addClientCarousel = (data) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .post("/client/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(getClientCarousel());
        dispatch(
          clientcarouselAlert({
            success: true,
            message: "Client added successfully",
          })
        );
      })
      .catch((err) => {
        dispatch(
          clientcarouselAlert({
            success: false,
            message: "Error adding client",
          })
        );
      });
  };
};

const updateClientCarousel = (data, id) => {
  return (dispatch) => {
    const { token } = isAuthenticated();
    axiosInstance
      .put(`/client/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch(getClientCarousel());
        dispatch(
          clientcarouselAlert({
            success: true,
            message: "Client updated successfully",
          })
        );
        dispatch(setupdateclientcarousel({ state: false, data: null }));
      })
      .catch((err) => {
        dispatch(
          clientcarouselAlert({
            success: false,
            message: "Error updating client",
          })
        );
        dispatch(setupdateclientcarousel({ state: false, data: null }));
      });
  };
};

export {
  updateClientCarousel,
  addClientCarousel,
  deleteClientCarousel,
  getClientCarousel,
  setupdateclientcarousel,
  clientcarouselAlert,
};
