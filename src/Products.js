import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import GridView from "./components/GridView";
import { useState } from "react";
import ListView from "./components/ListView";
import { useSelector } from "react-redux";
const Products = () => {
  const [isGrid, setIsGrid] = useState(true);
  const filterProducts = useSelector((state) => state.products.filterProducts);

  return (
    <Wrapper>
      <div className="container grid-filter-column ">
        <div className="filter">
          <FilterSection />
        </div>
        <div>
          <section className="product-view--sort">
            <div className="sort-filter">
              <Sort setIsGrid={setIsGrid} isGrid={isGrid} />
            </div>
            <div className="main-product">
              {isGrid && <GridView products={filterProducts} />}
              {!isGrid && <ListView products={filterProducts} />}
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  .container {
    margin: 3rem 4rem 0rem 9rem
  }
  .filter {
    width: 100%;
  }
  .main-product
  {
    width:100%;
    margin-top:20px;
  }
  .product-view--sort {
    width: 100%;
  }
  .grid-filter-column {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
   
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
