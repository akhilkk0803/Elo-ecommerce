import React from "react";
import classes from "./Footer.module.css";
import Button from "./Button";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.card}>
        <div>
          <h3>Ready To get Started?</h3>
          <br></br>
          <h3>Talk to us today</h3>
        </div>
        <NavLink to="/contact">
          <Button title="Get Started" />
        </NavLink>
      </div>
      <div className={classes.contact}>
        <div>
          <p>Elo</p>
          <p>Excepteur irure voluptate enim voluptate</p>
        </div>

        <div className={classes.subscribe}>
          <p>Subscribe to get important updates</p>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              required
            ></input>
            <br></br>
            <Button title="SUBSCRIBE" />
          </div>
        </div>
        <div className={classes.follow}>
          <p>Follow Us</p>
          <div className={classes.icons}>
            <AiOutlineInstagram className={classes.icon} />
            <AiOutlineTwitter className={classes.icon} />
            <AiOutlineFacebook className={classes.icon} />
          </div>
        </div>
        <div className={classes.call}>
          <p>Call us</p>
          <p>+9405940958498</p>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>&copy;{new Date().getFullYear()}Akhil,All rights reserved</p>
        <div className={classes.text}>
          <p>Privacy Policy</p>
          <p>Terms & conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
