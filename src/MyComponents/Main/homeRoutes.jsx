/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Route } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Header from "../Partials/Header";
import HeaderHome from "../Partials/HeaderHome";
import Stickynav from "../Partials/Stickynav";
import Mobilenav from "../Partials/Mobilenav";
import MobileHeader from "../Partials/MobileHeader";
import Header2 from "../Partials/Header2";

const HomeRoute = ({ component: Component, ...rest }) => {
  const navRef = useRef();
  const [navOpen, setnavOpen] = useState();
  useEffect(() => {
    if (navOpen) {
      disableBodyScroll(navRef);
    } else {
      enableBodyScroll(navRef);
    }
  }, [navOpen]);

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <div>
            <Header />
            {props.location.pathname === "/" ? <HeaderHome /> : <Header2 />}

            <Stickynav />
            <MobileHeader open={navOpen} setOpen={setnavOpen} />
            <Component {...props} />
          </div>
        )}
      />
    </>
  );
};

export default HomeRoute;
