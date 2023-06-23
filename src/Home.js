import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeaturedProduct from "./components/FeaturedProduct";
const Home = () => {
 
  console.log("home");
  return (
    <>
      <Hero title="Elo Store" />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
};
export async function loaderData() {
  const API = "https://api.pujakaitem.com/api/products";
  const response = await fetch(API);
  const data = await response.json();
  const featuredProduct = data.filter((el) => el.featured === true);
  return featuredProduct;
}
export default Home;
