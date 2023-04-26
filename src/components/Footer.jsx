import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/ps-minimal-logo.png";
import linkedIn from "../assets/img/nav-icon1.svg";
import resume from '../assets/img/resume-icon-white.svg';
import github from '../assets/img/github-icon-white.svg';

export const Footer = () => {
  const socialLinks = {
    linkedIn : "https://www.linkedin.com/in/ajmalkhana007/",
    github : "https://github.com/reaperhound",
    resume : "https://drive.google.com/uc?export=download&id=19nDYNn0pnZOjNTlQofE8mwBaceN41JKj",
  }
  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={socialLinks.linkedIn}><img src={linkedIn} alt="Icon" /></a>
              <a href={socialLinks.resume}><img src={resume} alt="Icon" style={{width:"50%"}} /></a>
              <a href={socialLinks.github}><img src={github} alt="Icon" style={{width:"55%"}} /></a>
            </div>
            <p>Copyright © 2023 Ajmal Khan A. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
