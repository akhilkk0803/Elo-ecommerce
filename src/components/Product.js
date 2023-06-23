import React from "react";
import classes from "./FeaturedProduct.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import FormatPrice from "./Helper/FormatPrice";
const Product = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -5,
      }}
      className="card"
    >
      <NavLink to={`/singleproduct/${props.id}`} className="link">
        <motion.div className={classes.imagesec}>
          <motion.img src={props.image}></motion.img>
          <NavLink to="/" className={classes.btn}>
            <button>{props.category}</button>
          </NavLink>
        </motion.div>
        <div className={classes.desc}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.price}>
            <FormatPrice price={props.price} />
          </p>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default Product;
