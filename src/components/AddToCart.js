import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartactions } from "../Store";
import CartAmountoggle from "./CartAmountoggle";
const AddToCart = ({ data }) => {
  const dispatch = useDispatch();
  const { id, colors, stock } = data;
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  function increaseamount() {
    setAmount((amount) => amount + 1);
  }
  function decreaseamount() {
    setAmount((amount) => (amount - 1 > 0 ? amount - 1 : 1));
  }
  function addtocart() {
    console.log("add");
    dispatch(
      cartactions.addtocart({
        image: data.image[0].url,
        id: activeColor + id,
        name: data.name,
        color: activeColor,
        amount,
        price: data.price,
      })
    );
  }
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((el, i) => (
            <button
              key={i}
              style={{ backgroundColor: el }}
              className={activeColor === el ? "btnStyle active" : "btnStyle"}
              onClick={() => {
                setActiveColor(el);
              }}
            >
              {activeColor === el ? <FaCheck className="checkStyle" /> : null}
            </button>
          ))}
        </p>

        <CartAmountoggle
          increaseamount={increaseamount}
          decreaseamount={decreaseamount}
          amount={amount}
        />

        <NavLink to="/cart" onClick={addtocart}>
          <Button title="Add To Cart"></Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 1.3rem;
    height: 1.3rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
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

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.3rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;
