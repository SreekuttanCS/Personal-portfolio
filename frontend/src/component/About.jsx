import { Container } from "react-bootstrap";
import Skills from "./Skills";

function About() {
  return (
    <section className="about">
      <h2 className="mt-5  heading">ABOUT ME</h2>
      <Container className="w-75  ">
        <p className="py-2 about-para">
          Hi, I’m a passionate Frontend Developer with expertise in HTML, CSS,
          JavaScript, and React JS. I also have experience in Backend
          Development with Node.js and Express.js, making me proficient in
          building full-stack MERN applications. I thrive on crafting scalable,
          responsive, and user-friendly solutions that solve real-world
          problems. With a keen eye for detail and a drive to continuously
          learn, I aim to deliver impactful web experiences. Let’s create
          something amazing together!
        </p>
        <Skills />
      </Container>
    </section>
  );
}

export default About;
