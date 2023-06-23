import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartAmountoggle = ({ increaseamount, decreaseamount,amount }) => {
  return (
    <div className="amount-toggle">
      <FiMinus onClick={() => decreaseamount()} />
      <p className="amount-style">{amount}</p>
      <FiPlus onClick={() => increaseamount()} />
    </div>
  );
};

export default CartAmountoggle;
