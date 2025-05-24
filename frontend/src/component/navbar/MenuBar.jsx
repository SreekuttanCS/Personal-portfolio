import React, { useState } from "react";
import Switch from "./Switch";
import Radio from "./Radio";
import { motion } from "framer-motion"; // Import Framer Motion

const MenuBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <motion.div
      className="menu-container"
      style={{ position: "relative", zIndex: 999 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Switch setIsMenu={setIsMenu} isMenu={isMenu} />
      {isMenu && (
        <motion.div
          style={{
            position: "absolute",
            top: "50px",
            right: 0,

            padding: "20px",
            borderRadius: "8px",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Radio />
        </motion.div>
      )}
    </motion.div>
  );
};

export default MenuBar;
