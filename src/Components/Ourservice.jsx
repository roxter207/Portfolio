import React from 'react'
import styled from 'styled-components'
import Parallex from 'react-rellax'
import { Root } from './Root';
import Box from './Box';
import { boxes } from '../data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: linear-gradient(to bottom,${(props)=>props.theme.fadecolor},${(props)=>props.theme.color});
  overflow: hidden;
`;

const Left = styled.div`
  flex: 1;  
`;
const Info = styled.div`
  top: 10%;
  min-width: 100% ;
  
`;

const Title = styled.h1`
  font-size: 76px;
  margin: 0 0 0 70px;
  color: white;
`;

const Desc = styled.p`
  margin-left: 5%;
  width: 49%;
  color: white;
`;
const Right = styled.div`
  flex: 1;
  position: absolute ;
  right: 9% ;
`;
const BoxContainer = styled.div`
  display: flex ;
  flex-direction: row ;
  position: relative ;
  float:right ;
  margin-right: 120px ;
`



const Ourservice = () => {
  return (
    <Container id='projects'>
        <Left>
          <Info>
            <Parallex speed={-1}>
              <Title>My Projects</Title>
            </Parallex>
            <Parallex speed={-1}>
              <Desc>
               These are few hosted projects I have worked on. The projects are build using various programing languages
               like React, Css, javascript, Html, Python, Unity and many more underlying languages.
                Please click on the box to see the projects.
              </Desc>
            </Parallex>
            <BoxContainer>
            {boxes.map((item) => (
              <Box item={item} key={item.id}/>
          ))}
            </BoxContainer>
          </Info>
        </Left>
        <Right>
          <Root/>
        </Right>
      </Container>
  )
}

export default Ourservice