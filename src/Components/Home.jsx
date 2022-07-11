import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
// import Illustration from "./Illustration";
import Parallex from "react-rellax";
import { keyframes } from "styled-components";
import Tree from "./Tree";


const toggle = keyframes`
    25%{
        transform: translateY(-50px);
    }   
    50% {
        transform: translateY(-100px);
    }
    75%{
        transform: translateY(-150px);
    }
    100%{
        transform: translateY(-200px);
    }
`;



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: linear-gradient(to bottom, ${(props)=>props.theme.color}, ${(props)=>props.theme.fadecolor});
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
`;
const Info = styled.div`
  position: absolute;
  top: 20%;
`;

const Title = styled.h1`
  font-size: 76px;
  margin: 0 0 0 70px;
  color:white;
`;
const Subtitles = styled.h2`
  height: 40px;
  overflow: hidden;
`;
const Desc = styled.p`
  margin: 30px 0 0 70px;
  width: 75%;
  color: white;
`;
const Right = styled.div`
  flex: 1;
`;

const List = styled.li`
  text-decoration: none ;
  display: flex ;
  font-size: 36px;
  margin: 0 0 0 70px;
  font-weight: lighter;
  opacity: 0.5;
  font-style: italic;
  color: lightblue;
  animation: ${toggle} 10s ease-in-out alternate infinite;

`;


const Home = () => {
  return (
    <>
      <Navbar />
      <Container id='home'>
        <Left>
          <Info>
            <Parallex speed={5}>
              <Title>Hello I'm Sneha</Title>
            </Parallex>
            <Parallex speed={4}>
              <Subtitles>
                <List>Web Developer</List>
                <List>Game Developer</List>
                <List>UI/UX Designer</List>
                <List>Writer</List>
                <List>Data Analyst</List>
              </Subtitles>
            </Parallex>
            <Parallex speed={3}>
              <Desc>
                Currently pursuing BE Degree in Information Techonology from SPPU university.
                <br></br>
                Interested in Data science and machine learning, game development, frontend
                web development and web designing as well.  
              </Desc>
            </Parallex>
          </Info>
        </Left>
        <Right>
          <Tree/>
        </Right>
      </Container>
    </>
  );
};

export default Home;
