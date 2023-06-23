import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productactions } from "../Store";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import FormatPrice from "./Helper/FormatPrice";
import Button from "./Button";
const FilterSection = () => {
  const dispatch = useDispatch();
  const [value, setvalue] = useState("");
  const [currCat, setCat] = useState("");
  const [activeColor, setColor] = useState("");

  function changeValue(e) {
    dispatch(productactions.filterbyvalue(e.target.value));
    setvalue(e.target.value);
  }
  const categories = useSelector((state) => state.products.categoryData);
  const companies = useSelector((state) => state.products.companyData);
  const colors = useSelector((state) => state.products.colorsData);
  const maxprice = useSelector((state) => state.products.maxPrice);
  const [price, setPrice] = useState(`${maxprice}`);
  function filterCat(e) {
    console.log(e.target.value);
    setCat(e.target.value);
    dispatch(productactions.filterPro({ value: e.target.value, type: "Cat" }));
  }
  function changeCompany(e) {
    dispatch(productactions.filterPro({ value: e.target.value, type: "Comp" }));
  }
  function filterColor(e) {
    setColor(e.target.value);
    console.log(e.target.value);
    dispatch(
      productactions.filterPro({ value: e.target.value, type: "Color" })
    );
  }
  function filterbyprice(e) {
    setPrice(e.target.value);
    dispatch(
      productactions.filterPro({ value: e.target.value, type: "price" })
    );
  }
  function reset() {
    dispatch(productactions.reset());
    setPrice(maxprice);
    setvalue("");
    setColor("");
    setCat("");
  }
  return (
    <Wrapper>
      <div className="filter-search">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setvalue("");
          }}
        >
          <input
            type="text"
            name="text"
            placeholder="Search"
            onChange={changeValue}
            value={value}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          <button
            key={1}
            type="button"
            name="category"
            onClick={filterCat}
            value="All"
            className={currCat == "All" ? "active" : ""}
          >
            All
          </button>
          {categories.map((el) => (
            <button
              key={el}
              type="button"
              name="category"
              onClick={filterCat}
              value={el}
              className={currCat == el ? "active" : ""}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onChange={changeCompany}
          >
            <option value="All" name="company">
              All
            </option>
            {companies.map((el) => (
              <option value={el} name="company">
                {el}
              </option>
            ))}
          </select>
        </form>
        <div className="filter-color-style">
          {colors.map((el) => (
            <button
              type="button"
              style={{ backgroundColor: el }}
              className={activeColor === el ? "btnStyle active" : "btnStyle"}
              value={el}
              name="color"
              onClick={filterColor}
            >
              {" "}
              {activeColor == el ? <FaCheck className="checkStyle" /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          {" "}
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          min="0"
          max={maxprice}
          value={price}
          name="price"
          step="100"
          onChange={filterbyprice}
        ></input>
      </div>
      <div className="filter-clear" onClick={reset}>
        <Button title="Clear Filter" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    margin-top: 20px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap;
    gap:13px;

  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 1.2rem;
    height: 1.2rem;
    background-color: #000;
    border-radius: 50%;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;
