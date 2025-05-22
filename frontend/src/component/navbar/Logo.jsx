import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <LogoText>sk</LogoText>
        </motion.div>
      </LogoContainer>
    </Link>
  );
};

export default Logo;

const LogoContainer = styled.div`
  font-size: 32px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;

const LogoText = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #3ccf91;
`;
