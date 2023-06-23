import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import classes from "./Services.module.css";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div className={classes.services}>
      <motion.div
        className={classes.service1}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -20,
        }}
      >
        <TbTruckDelivery className={classes.icon} />
        <div className={classes.service}>Super Fast and Free Delivery</div>
      </motion.div>
      <div className={classes["service-column"]}>
        <motion.div
          className={classes.service2}
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            y: -20,
          }}
        >
          <MdOutlineSecurity className={classes.icon} />
          <div className={classes.service}>Non Conatact Shipping</div>
        </motion.div>
        <motion.div
          className={classes.service3}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            y: -20,
          }}
        >
          <GiPayMoney className={classes.icon} />
          <div className={classes.service}>Money Back Guaranteed</div>
        </motion.div>
      </div>
      <motion.div
        className={classes.service4}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -20,
        }}
      >
        <RiSecurePaymentLine className={classes.icon} />
        <div className={classes.service}>Super Secure Payment System</div>
      </motion.div>
    </div>
  );
};

export default Services;
