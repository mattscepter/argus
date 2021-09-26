/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getClientCarousel } from "../../../../context/actions/adminActions/clientsAction";
import { getContact } from "../../../../context/actions/adminActions/contactAction";
import { getTeam } from "../../../../context/actions/adminActions/teamAction";
import { getTestimonial } from "../../../../context/actions/adminActions/testimonialAction";
import { getEOMAdmin } from "../../../../context/actions/adminActions/eomAction";
import { isAuthenticated } from "./../../../../helpers/auth";

const AdminRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEOMAdmin());
    dispatch(getTestimonial());
    dispatch(getContact());
    dispatch(getClientCarousel());
    dispatch(getTeam());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() &&
        isAuthenticated().user?.role === 2 /* User 2 is Admin */ ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
