import React from "react";
import classes from "./button.module.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Button = (props) => {
  return (
      <motion.button
        className={classes["btn"]}
        whileHover={{ y: 2, scale: 1.2, backgroundColor: "rgb(64, 79, 212)" }}
        whileTap={{ scale: 0.8 }}
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </motion.button>

  );
};

export default Button;
