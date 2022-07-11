import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Boxes = styled.div`
  background-color: #cdc3c3;
  height: auto;
  width: auto;
  padding: 50px;
  margin-top: 150px;
  margin-left: 90px;
  /* position: absolute ; */
  cursor: pointer;
  transition: 0.5s ease-in-out;
  border-radius: 10px;

  &:hover {
    background-color: "white";
    box-shadow: 1px 1px 30px #343b7c;
  }
`;
const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  color: black;
`;

const Desc = styled.a`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: gray;
`;

const Box = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Boxes
      as={motion.div}
      layout
      transition={{ layout: { duration: 0.6, type: "spring" } }}
      onClick={() => setIsOpen(!isOpen)}
      style={{ backgroundColor: isOpen ? "white" : null }}
    >
      <Title as={motion.h1}>{item.title}</Title>
      {isOpen && (
        <>
          <Desc as={motion.a}  whileHover={{ scale: 1.2 }} href={item.link}>
            {item.name}
          </Desc>
          <Desc as={motion.a}  whileHover={{ scale: 1.2 }} href={item.link1}>
            {item.name1}
          </Desc>
          <Desc as={motion.a} whileHover={{ scale: 1.2 }} href={item.link2}>
            {item.name2}
          </Desc>
          <Desc as={motion.a} whileHover={{ scale: 1.2 }} href={item.link3}>
            {item.name3}
          </Desc>
          <Desc as={motion.a} whileHover={{ scale: 1.2 }} href={item.link4}>
            {item.name4}
          </Desc>
          
        </>
      )}
    </Boxes>
  );
};

export default Box;
