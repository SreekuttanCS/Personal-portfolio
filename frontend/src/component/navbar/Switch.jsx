import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import Framer Motion

const Switch = ({ setIsMenu, isMenu }) => {
  const handleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <div>
        <input id="checkbox" type="checkbox" onChange={handleMenu} />
        <label className="toggle" htmlFor="checkbox">
          <motion.div
            id="bar1"
            className="bars"
            animate={{
              rotate: isMenu ? 45 : 0,
              y: isMenu ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            id="bar2"
            className="bars"
            animate={{
              opacity: isMenu ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            id="bar3"
            className="bars"
            animate={{
              rotate: isMenu ? -45 : 0,
              y: isMenu ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: 0.3s;
  }

  .bars {
    width: 80%;
    height: 3px;
    background-color: rgb(253, 255, 243);
    border-radius: 5px;
    transition-duration: 0.3s;
  }
`;

export default Switch;
