import React from "react";
import { useRouteError } from "react-router";
import Button from "./components/Button";
import { NavLink } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const ErrorPage = (props) => {
  const error = useRouteError();
  console.log(error);
  let message = "PAGE NOT FOUND";
  let status = 404;
  if (error.data?.message) message = error.data.message;
  if (error.data?.status) status = error.data.status;
  return (
    <>
      <Header />
      <div className="error">
        <div className="status">Error {status}!</div>
        <div className="message">{message}</div>
        <NavLink to="/">
          <Button title="Home" ></Button>
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
