import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Image = ({ image }) => {
    const [img,setImg]=useState(0);
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {image.map((el, i) => (
        
            <img
              src={el.url}
              alt={el.filename}
              className="box-image--style"
              key={i}
              onClick={()=>setImg(i)}
            ></img>
         
        ))}{" "}
      </div>
      <div className="main-screen">
        <motion.img src={image[img].url} alt={image[0].filename} whileTap={{scale:2}} ></motion.img>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content:center;
    
    gap: 1rem;
    height:100%;
    place-items: center;

    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
   
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .box-image--style
  {
    
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default Image;
