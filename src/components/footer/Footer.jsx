import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>
            Designed and Developed by{" "}
            <i className="primary-header">Ayush Gupta</i>
          </span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="github"
                href="https://github.com/Ayush3205"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="email"
                href="mailto:rahul.workmail01@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: `var(--clr-primary)` }}
                className="linkedin"
                href="https://www.linkedin.com/in/ayush-gupta3205/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
