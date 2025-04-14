import projects from "./projects/project";
import { Col, Row } from "react-bootstrap";

function Project() {
  return (
    <section className="project d-flex justify-content-center align-items-center flex-column pt-5">
      <h2 className="pt-5 heading">PROJECTS</h2>
      <div className="projects">
        {projects.map((item) => (
          <Row key={item.id} className="projects-item my-3">
            <Col md={6}>
              <img
                src={item.image}
                alt={item.title}
                className="w-100 pt-4"
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col md={6} className="project-info p-4">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="d-flex w-md-75 project-button justify-content-around">
                <a href={item.demo} target="_blank" rel="noopener noreferrer">
                  <button>Visit Website</button>
                </a>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <button>View GitHub</button>
                </a>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
}

export default Project;
