import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'am webcoded`}
              <span className="wrap">Web Developer</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nisi doloremque eligendi, earum hic assumenda sunt vero dolore
              impedit atque consectetur doloribus dolor, sapiente, consequatur
              adipisci voluptate ex provident. Illo.
            </p>
            <button onClick={() => console.log("connect")}>
              {" "}
              Let's Connect
              <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
