import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Radio = () => {
  return (
    <StyledWrapper>
      <NavBar>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <NavItem>
            <StyledLink to="/contact">Contact</StyledLink>
          </NavItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <NavItem>
            <StyledLink to="/about">About</StyledLink>
          </NavItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <NavItem>
            <StyledLink to="/project">Project</StyledLink>
          </NavItem>
        </motion.div>
      </NavBar>
    </StyledWrapper>
  );
};

export default Radio;

const StyledWrapper = styled.div`
  padding: 15px 10px;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: col;
    gap: 30px;
  }
`;

const NavItem = styled.div`
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #3ccf91;
  }
`;
