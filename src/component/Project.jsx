import projects from "./projects/project";
import { Col, Row } from "react-bootstrap";
function Project() {
  return (
    <section className="project d-flex justify-content-center align-items-center flex-column pt-5">
      <h2 className="pt-5 heading">PROJECTS</h2>
      <div className="projects">
        {projects.map((item) => (
          <Row key={item.id} className="projects-item my-3 ">
            <Col md={6}>
              <img src={item.image} alt="" className="w-100 " />
            </Col>
            <Col md={6} className="project-info p-4">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="d-flex w-75 project-button justify-content-around">
                <button target="_blank" rel="noopener noreferrer">
                  <a href={item.demo} target="_blank">
                    Visit Website
                  </a>
                </button>
                <button>
                  <a href={item.github} target="_blank">
                    View GitHub
                  </a>
                </button>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
}

export default Project;
