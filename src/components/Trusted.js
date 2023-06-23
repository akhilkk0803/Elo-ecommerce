import React from "react";
import classes from "./Trusted.module.css";
import { motion } from "framer-motion";
const Trusted = () => {
  return (
    <motion.div className={classes.trusted}>
      <p>Trusted By 1000+ Companies</p>
      <div className={classes.images}>
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          className={classes.image}
          whileHover={{ scale: 1.2 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        ></motion.img>
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          className={classes.image}
          whileHover={{ scale: 1.2 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        ></motion.img>
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          className={classes.image}
          whileHover={{ scale: 1.2 }}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.img>
        <motion.img
          src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
          className={classes.image}
          whileHover={{ scale: 1.2 }}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        ></motion.img>
      </div>
    </motion.div>
  );
};

export default Trusted;
