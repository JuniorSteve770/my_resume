import React from 'react';
import { Container, Table, Badge, Card, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/resumeData';

function Projects() {
  return (
    <section className="projects-section py-5" id="projects">
      <Container>
        <motion.h2
          className="text-center display-6 mb-5 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        {/* Desktop View - Table */}
        <div className="d-none d-lg-block">
          <Table bordered hover responsive className="align-middle">
            <thead style={{ backgroundColor: 'var(--darker-bg)', borderBottom: '2px solid var(--border-color)' }}>
              <tr>
                <th style={{ width: '30%', fontWeight: '700' }}>Domain</th>
                <th style={{ width: '50%', fontWeight: '700' }}>Project Details & Tech Stack</th>
                <th style={{ width: '20%', fontWeight: '700' }}>Links</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((category, index) => (
                category.projects.map((project, idx) => (
                  <tr key={`${index}-${idx}`}>
                    {idx === 0 && (
                      <td rowSpan={category.projects.length} className="fw-bold align-middle text-center" style={{ verticalAlign: 'top', width: '30%' }}>
                        <div className="p-2 mb-3 bg-primary text-white rounded fs-6 shadow-sm">{category.domain}</div>
                        {category.image && (
                          <div className="mt-3">
                            <img src={category.image} alt={category.domain} className="img-fluid rounded shadow" style={{ maxHeight: '250px', objectFit: 'cover', width: '100%' }} />
                          </div>
                        )}
                      </td>
                    )}
                    <td>
                      <h5 className="fw-bold text-primary">{project.title}</h5>
                      <p className="fw-medium theme-text">{project.description}</p>
                      <div className="d-flex flex-wrap gap-2">
                        {project.techStack.map((tech, id) => (
                          <Badge bg="secondary" className="p-2" key={id}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="d-grid gap-2">
                        {project.links.map((link, linkIdx) => {
                          const isInternal = link.startsWith('/');
                          return (
                            <Button
                              variant="outline-primary"
                              {...(isInternal
                                ? { as: Link, to: link }
                                : { href: link, target: "_blank", rel: "noreferrer" })}
                              key={linkIdx}
                              className="text-start"
                            >
                              Explore Project Case {linkIdx + 1} →
                            </Button>
                          );
                        })}
                        {project.links.length === 0 && (
                          <span className="text-muted">Coming soon</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </Table>
        </div>

        {/* Mobile View - Cards */}
        <div className="d-lg-none">
          <Row className="g-4">
            {projectsData.map((category, index) => (
              <React.Fragment key={index}>
                <Col xs={12} className="px-0 px-md-3">
                  <h4 className="fw-bold text-center mb-0 p-3 bg-primary text-white rounded shadow-sm w-100">
                    {category.domain}
                  </h4>
                  {category.image && (
                    <div className="mt-3 mb-4 text-center">
                      <img src={category.image} alt={category.domain} className="img-fluid rounded shadow border border-secondary w-100" style={{ maxHeight: '280px', objectFit: 'cover' }} />
                    </div>
                  )}
                </Col>
                {category.projects.map((project, idx) => (
                  <Col xs={12} key={idx}>
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <Card.Title className="fw-bold text-primary">
                          {project.title}
                        </Card.Title>
                        <Card.Text className="fw-medium theme-text">
                          {project.description}
                        </Card.Text>
                        <div className="mb-3">
                          <h6 className="fw-bold">Tech Stack:</h6>
                          <div className="d-flex flex-wrap gap-2">
                            {project.techStack.map((tech, id) => (
                              <Badge bg="secondary" className="p-2" key={id}>
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          {project.links.map((link, linkIdx) => {
                            const isInternal = link.startsWith('/');
                            return (
                              <Button
                                variant="outline-primary"
                                {...(isInternal
                                  ? { as: Link, to: link }
                                  : { href: link, target: "_blank", rel: "noreferrer" })}
                                key={linkIdx}
                                size="sm"
                              >
                                Explore Project Case {linkIdx + 1} →
                              </Button>
                            );
                          })}
                          {project.links.length === 0 && (
                            <span className="text-muted text-center">Coming soon</span>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </React.Fragment>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Projects;


