import React from "react";
import projects from "./project";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";

const ProjectSection = () => {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  return (
    <div className="projects">
      {sortedProjects.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Row className="projects-item my-3">
            <Col md={6}>
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-100 pt-4"
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </Col>
            <Col md={6} className="project-info p-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                {item.description}
              </motion.p>
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
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectSection;
