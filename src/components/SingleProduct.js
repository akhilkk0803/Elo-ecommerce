import styled from "styled-components";
import React from "react";
import Image from "./Image";
import FormatPrice from "./Helper/FormatPrice";
import { useLoaderData, json } from "react-router";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Container } from "../styles/Container";
import Star from "./Star";
import AddToCart from "./AddToCart";
const SingleProduct = () => {
  const data = useLoaderData();
  const {
    colors,
    id,
    image,
    price,
    stars,
    stock,
    reviews,
    company,
    description,
    name,
    category,
  } = data;
  console.log(data);
  return (
    <Wrapper>
      <Container>
        <div className="grid grid-two-columns">
          <div className="product-images">
            <Image image={image} />
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product-data-price ">
              MRP:
              <s>
                <FormatPrice price={price + 5000} />{" "}
              </s>
            </p>
            <p className="product-data-price product-data-real-price ">
              Deal of the Day:
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty ">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>1 Day Delivery</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>3 Year Warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Availability:
                <span>{stock > 0 ? "In Stock" : "Not Avaliable"}</span>
              </p>
              <p>
                Id: <span>{id}</span>
              </p>
              <p>
                Brand: <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart data={data} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-top:30px;
  .container {
    padding: 9rem 0;
  }
  p,
  button {
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 400;
  }
  h2 {
    font-size: 40px;
    font-weight: 400;
  }
  .grid-two-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width:90%;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 2.9rem;
          height: 2.9rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.2rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    width:100%;
 
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
export async function loadSingleProduct({ request, params }) {
  const id = params.id;
  console.log(id);
  const API = "https://api.pujakaitem.com/api/products";

  const response = await fetch(API + "?id=" + params.id);
  if (!response.ok) {
    throw json({ message: "Could not get data" });
  }
  const data = await response.json();
  console.log(data);
  return data;
}
