import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Skills from "../component/projects/Skills";
import HeadingText from "../component/common/HeadingText";
import AboutSection from "../component/about/AboutSection";

function About() {
  return (
    <section className="about">
      <HeadingText text={"ABOUT"} />
      <AboutSection/>
    </section>
  );
}

export default About;
