import React from "react";
import { Form } from "react-router-dom";
import classes from "./Input.module.css";
import Button from "./Button";
const Input = () => {
  return (
    <Form method="POST" className={classes.form}>
      <input
        type="text"
        name="name"
        required
        autoComplete="off"
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        required
        autoComplete="off"
        placeholder="Email"
      />
      <textarea
        cols="50"
        rows="20"
        placeholder="Address"
        name="address" required
      ></textarea>
      <Button type="submit" title="Submit"></Button>
    </Form>
  );
};

export default Input;
