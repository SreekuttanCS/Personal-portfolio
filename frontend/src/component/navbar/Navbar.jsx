import styled from "styled-components";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <NavContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <NavContent>
        <Logo />
        <MenuBar />
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled(motion.div)`
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;
