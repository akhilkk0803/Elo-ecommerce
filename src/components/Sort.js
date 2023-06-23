import React, { useEffect, useRef, useState } from "react";
import { BsGrid } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "../Products.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productactions } from "../Store";
const Sort = ({ setIsGrid, isGrid }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const value = document.getElementById("sort").value;
    dispatch(productactions.sort({ type: value }));
  }, []);
  function sorting(e) {
    const value = document.getElementById("sort").value;
    dispatch(productactions.sort({ type: value }));
  }
  const products = useSelector((state) => state.products.filterProducts);
  return (
    <div className={classes.sort}>
      <div>
        <BsGrid
          onClick={() => setIsGrid(true)}
          className={
            isGrid ? `${classes.btn} ${classes.active}` : classes["btn"]
          }
        />
        <AiOutlineMenu
          onClick={() => setIsGrid(false)}
          className={
            !isGrid ? `${classes.btn} ${classes.active}` : classes["btn"]
          }
        />
      </div>
      <p>{products.length} Total Products</p>
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className={classes.dropdown}
            onClick={sorting}
          >
            <option value="all" defaultChecked>
              All Products
            </option>
            <option value="#" disabled></option>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="aToz">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="zToa">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
