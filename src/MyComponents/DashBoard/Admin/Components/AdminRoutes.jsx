/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getEOMAdmin } from "../../../../context/actions/eomAction";
import { isAuthenticated } from "./../../../../helpers/auth";

const AdminRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEOMAdmin());
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
