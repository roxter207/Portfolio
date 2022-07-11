import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  background-color: yellow;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  background-color: black;
  width: auto;
  height: auto;
  padding: 20px;
  border-radius: 10px;
`;
const Title = styled.h1`
  color: white;
`;
const Link = styled.p`
  color: white;
`;
const Desc = styled.p`
  color: white;
`;
const FramerBoc = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Box
        as={motion.div}
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
      >
        <Title as={motion.h2} layout="position">
          Framer Motion
        </Title>
        {isOpen && (
          <>
            <Link as={motion.li}>Link1</Link>
            <Link as={motion.li}>Link2</Link>
            <Link as={motion.li}>Link3</Link>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              perspiciatis quam consectetur beatae nihil fuga, autem odit iste
              vitae quo?
            </Desc>
          </>
        )}
      </Box>
    </Container>
  );
};

export default FramerBoc;
