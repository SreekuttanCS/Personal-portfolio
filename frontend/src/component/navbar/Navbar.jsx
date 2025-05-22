import Logo from "./Logo";
import MenuBar from "./MenuBar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="d-flex justify-content-around navbar align-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Logo />
      <MenuBar />
    </motion.div>
  );
};

export default Navbar;
