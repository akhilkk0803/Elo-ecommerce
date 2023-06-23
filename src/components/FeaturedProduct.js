import { useLoaderData } from "react-router";
import React from "react";
import classes from "./FeaturedProduct.module.css";
import Product from "./Product";
const FeaturedProduct = () => {
  const featuredProduct = useLoaderData();
  console.log(featuredProduct);
  return (
    <div className={classes.featured}>
      <div className={classes.text}>
        <p className={classes.checknow}>Check Now</p>
        <p className={classes.services}>Our Featured Products</p>
      </div>
      <div className={classes.products}>
        {featuredProduct.map((el) => (
          <>
            <Product
              image={el.image}
              name={el.name}
              price={el.price}
              id={el.id}
              category={el.category}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
