import React from "react";
import { useSelector } from "react-redux";
import FormatPrice from "./Helper/FormatPrice";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const ListView = (props) => {
  return (
    <div className="list-view">
      {props.products.length === 0 ? (
        <p>0 Products Available</p>
      ) : (
        props.products.map((el) => (
          <div className=" card grid-2cols">
            <div className="">
              <img src={el.image}></img>
            </div>
            <div className="product-data">
              <h3>{el.name}</h3>
              <p>
                <FormatPrice price={el.price} />
              </p>
              <p>{el.description.slice(0, 90)}...</p>
              <NavLink to={`/singleproduct/${el.id}`}>
                <Button title="Read More" />
              </NavLink>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListView;
