import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Outlet } from "react-router";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((state) => state.cart.totalItem);
  const [menuIcon, setMenuIcon] = useState(false);
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={Logo} className="logo" />
      </NavLink>
      <Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists">
            <motion.li whileHover={{ y: -10, x: 5 }}>
              <NavLink
                to="/"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ y: -10, x: 5 }}>
              <NavLink
                to="about"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                About
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ y: -10, x: 5 }}>
              <NavLink
                to="contact"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Contact
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ y: -10, x: 5 }}>
              <NavLink
                to="products"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Products
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ y: -10, x: 5 }}>
              <NavLink
                to="cart"
                className="navbar-link cart-trolley--link "
                onClick={() => setMenuIcon(false)}
              >
                <FiShoppingCart className="cart-trolley" />
                <span className="cart-total--item">{cart}</span>
              </NavLink>
            </motion.li>
          </ul>
        </div>
        <AiOutlineMenu
          name="menu-outline"
          className="menu"
          onClick={() => setMenuIcon(true)}
        />
        <AiOutlineClose
          name="close-outline"
          className="close"
          onClick={() => setMenuIcon(false)}
        />
      </Nav>
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;

  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 3.3rem;
    width: auto;
  }
`;
const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    list-style-type: none;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  .menu{
  display:none;
   }
  .close{
  display:none;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }


  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 2.3rem;
    }

    .cart-total--item {
      width: 2.2rem;
      height: 2.2rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -30%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
 @media (max-width:891px){
  .menu{
    display:block;
    font-size:30px;
  }
  .navbar{
    display:none;
  }
 }
  }
`;

export default Header;
// @media (max-width: ${({ theme }) => theme.media.mobile}) {
//   .mobile-navbar-btn {
//     display: inline-block;
//     z-index: 9999;
//     border: ${({ theme }) => theme.colors.black};

//     .mobile-nav-icon {
//       font-size: 4.2rem;
//       color: ${({ theme }) => theme.colors.black};
//     }
//   }

//   .active .mobile-nav-icon {
//     display: none;
//     font-size: 4.2rem;
//     position: absolute;
//     top: 30%;
//     right: 10%;
//     color: ${({ theme }) => theme.colors.black};
//     z-index: 9999;
//   }

//   .active .close-outline {
//     display: inline-block;
//     zindex: 999;
//   }

//   .navbar-lists {
//     width: 100vw;
//     height: 100vh;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: #fff;

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;

//     visibility: hidden;
//     opacity: 0;
//     transform: translateX(100%);
//     /* transform-origin: top; */
//     transition: all 3s linear;
//   }

//   .active .navbar-lists {
//     visibility: visible;
//     opacity: 1;
//     transform: translateX(0);
//     z-index: 999;
//     transform-origin: right;
//     transition: all 3s linear;

//     .navbar-link {
//       font-size: 4.2rem;
//     }
//   }
//   .cart-trolley--link {
//     position: relative;

//     .cart-trolley {
//       position: relative;
//       font-size: 5.2rem;
//     }

//     .cart-total--item {
//       width: 4.2rem;
//       height: 4.2rem;
//       font-size: 2rem;
//     }
//   }

//   .user-logout,
//   .user-login {
//     font-size: 2.2rem;
//     padding: 0.8rem 1.4rem;
//   }
