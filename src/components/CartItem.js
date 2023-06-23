import React from "react";

import FormatPrice from "./Helper/FormatPrice";
import CartAmountoggle from "./CartAmountoggle";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartactions } from "../Store";
const CartItem = ({ id, name, image, color, amount, price }) => {
  const [curramount, setcurramount] = useState(amount);
  const dispatch = useDispatch();
  function increaseamount() {
    setcurramount((curramount) => curramount + 1);
    dispatch(
      cartactions.addtocart({
        image: image,
        id: id,
        name: name,
        color: color,
        amount: 1,
        price: price,
      })
    );
  }

  function decreaseamount() {
    setcurramount((curramount) => (curramount - 1 > 0 ? curramount - 1 : 1));
    dispatch(cartactions.removefromcart(id));
  }
  function remove() {
    dispatch(cartactions.remove(id));
  }
  return (
    <div className="cart-heading grid  grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              style={{ backgroundColor: color }}
              className="color-style"
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      <CartAmountoggle
        amount={curramount}
        increaseamount={increaseamount}
        decreaseamount={decreaseamount}
      />
      <div>
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={remove} />
      </div>
    </div>
  );
};

export default CartItem;
