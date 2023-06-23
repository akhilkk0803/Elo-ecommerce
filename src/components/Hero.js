import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import hero from "../images/hero.jpg";
import Button from "./Button";
import { NavLink, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
const Hero = (props) => {

  return (
    <div className={classes["container"]}>
      <div className={classes.text}>
        <p className={classes["welcome-text"]}>Welcome To</p>
        <p className={classes["Store-text"]}>{props.title}</p>
        <p className={classes["para-text"]}>
          Culpa dolore minim amet officia consectetur sint pariatur elit mollit
          pariatur mollit tempor mollit. Minim cupidatat laborum exercitation
          sunt ullamco enim exercitation sunt. Sit laboris veniam reprehenderit
          us
        </p>
        <NavLink to="/products">
          {" "}
          <Button title="Shop now" type="text" to="/products" />
        </NavLink>
      </div>

      <div className={classes.img}>
        <img src={hero} className={classes["hero-img"]}></img>
      </div>
    </div>
  );
};

export default Hero;
