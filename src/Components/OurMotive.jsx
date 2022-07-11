import React from "react";
import styled from "styled-components";
import Ladyillus from "./Ladyillus";
// import Parallex from "react-rellax";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color},
    ${(props) => props.theme.fadecolor}
  );
  display: flex;
`;
const Right = styled.div`
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
  padding-left: 40px;
`;
const Info = styled.div`
  margin-top: 30%;
`;
const Title = styled.h1`
  color: white;
  font-size: 76px;
  text-align: right;
  padding-right: 10%;
`;
const Desc = styled.p`
  color: white;
  text-align: right;

  padding-right: 10%;
`;
const OurMotive = () => {
  return (
    <>
      <Container id="aboutme">
        <Left>
          <Ladyillus />
        </Left>
        <Right>
          <Info>
            <Title>My Ambition</Title>
            <Desc>
              We all have amibition. Life without ambitin is like rudderless
              stop. My ambition is to gain more knowledge by doing practical
              project and excel in the relative field. Contribute my time and
              work to help the community and overcome any obstacles.
            </Desc>
          </Info>
        </Right>
      </Container>
    </>
  );
};

export default OurMotive;
