import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Nav = styled.div`
  width: 100%;
  min-height: 8vh;
  background-color: #131424;
`;
const Left = styled.div`
  display: flex;
`;
const LogoText = styled.h1`
  font-size: 36px;
  margin: 10px 55px 0px 20px;
  color: white;
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LinkDiv = styled.div``;
const Right = styled.div``;
const Links = styled.li`
  text-decoration: none;
  width: auto;
  cursor: pointer;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  color: white;
`;

const dashin = keyframes`
 from{
   stroke-dashoffset:100;
 }
  to{
    stroke-dashoffset:0;
  }
`;

const Line = styled.svg`
  width: 530px;
  height: 1px;
  background-image: linear-gradient(to right, #9ecbf3, #118efb);
  margin-top: 2px;

  & .path {
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
    animation: ${dashin} 3s linear forwards;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Left>
        <LogoText>Portfolio</LogoText>
        <LinkDiv>
          <LinkBox>
            <Link to="#home" smooth style={{textDecoration:"none"}}>
              <Links>Home</Links>
            </Link>
           
            <Link to="#projects" smooth style={{textDecoration:"none"}}>
              <Links>Projects</Links>
            </Link>
            <Link to="#aboutme" smooth style={{textDecoration:"none"}}>
              <Links>About me</Links>
            </Link>
          </LinkBox>
          <Line></Line>
        </LinkDiv>
      </Left>
      <Right></Right>
    </Nav>
  );
};

export default Navbar;
