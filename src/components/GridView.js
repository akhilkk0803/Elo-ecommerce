import React from "react";
import { json, useLoaderData } from "react-router";
import Product from "./Product";
import classes from "../Products.module.css";
import { useDispatch } from "react-redux";
import { productactions } from "../Store";
const ProductList = (props) => {
  const products = useLoaderData();
  console.log(products);
  const dispatch = useDispatch();
  dispatch(productactions.addAllProducts(products));
  dispatch(productactions.getUniquedata("category"));
  dispatch(productactions.getUniquedata("company"));
  dispatch(productactions.getUniquedata("colors"));
  dispatch(productactions.getUniquedata("price"));
  return (
    <div className={classes.products}>
      {props.products.length === 0 ? (
        <p>0 Products Avaiable</p>
      ) : (
        props.products.map((el) => (
          <Product
            image={el.image}
            name={el.name}
            price={el.price}
            id={el.id}
            category={el.category}
          />
        ))
      )}
      {}
    </div>
  );
};

export default ProductList;
export async function loaderProduct() {
  const API = "https://api.pujakaitem.com/api/products";
  const response = await fetch(API);
  const data = await response.json();
  if (!response.ok) {
    throw json({ message: "COULD NOT GET PRODUCTS" }, { status: 420 });
  }
  return data;
}
