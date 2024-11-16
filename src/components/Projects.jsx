import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import proImg1 from "../assets/img/project-img1.png";
import proImg2 from "../assets/img/project-img2.png";
import proImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Website",
      description: "its a website. made on Javascript",
      imgUrl: proImg1,
    },
    {
      title: "Website",
      description: "its a website. made on Javascript",
      imgUrl: proImg2,
    },
    {
      title: "Website",
      description: "its a website. made on Javascript",
      imgUrl: proImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              molestias maxime, repudiandae impedit eaque.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Other Projects</Tab.Pane>
                <Tab.Pane eventKey="third">Other Projects</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
