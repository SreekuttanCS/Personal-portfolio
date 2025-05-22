import React, { useState } from "react";
import Switch from "./Switch";
import Radio from "./Radio";
import { motion } from "framer-motion"; // Import Framer Motion

const MenuBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <motion.div
      className="menu-container"
      style={{ position: "relative" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <Switch setIsMenu={setIsMenu} isMenu={isMenu} />
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Radio />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuBar;
