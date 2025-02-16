import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="home d-flex align-items-start flex-column justify-content-center min-vh-100  px-3">
          <span className="home-text my-1">HEY! I'M-</span>
          <span className="home-name my-1">SreeKuttan</span>
          <span className="home-text home-para w-75 my-2">
            Crafting seamless web solutions with precision. As a full-stack
            developer, I develop user-friendly, accessible experiences that
            drive engagement.
          </span>
        </div>
      </motion.h1>
    </>
  );
}

export default Home;
