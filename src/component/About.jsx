import Skills from "./Skills";

function About() {
  return (
    <div className="comp-content">
      <div className="about">
        <h2 className="my-4 heading">ABOUT ME</h2>
        <div className="w-75  ">
          <p className="py-2 about-para">
            Hi, I’m a passionate Frontend Developer with expertise in HTML, CSS,
            JavaScript, and React JS. I also have experience in Backend
            Development with Node.js and Express.js, making me proficient in
            building full-stack MERN applications. I thrive on crafting
            scalable, responsive, and user-friendly solutions that solve
            real-world problems. With a keen eye for detail and a drive to
            continuously learn, I aim to deliver impactful web experiences.
            Let’s create something amazing together!
          </p>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
