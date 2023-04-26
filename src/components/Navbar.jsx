import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/ps-minimal-logo.png';
import linkedIn from '../assets/img/nav-icon1.svg';
import resume from '../assets/img/resume-icon-white.svg';
import gitHub from '../assets/img/github-icon-white.svg';
import { HashLink } from 'react-router-hash-link';
import { Tooltip } from "react-tooltip";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const socialLinks = {
    linkedIn : "https://www.linkedin.com/in/ajmalkhana007/",
    github : "https://github.com/reaperhound",
    resume : "https://drive.google.com/uc?export=download&id=19nDYNn0pnZOjNTlQofE8mwBaceN41JKj",
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img  src={logo} alt="Logo" 
            
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <Tooltip id="linkedIn-tooltip" />
                <a
                data-tooltip-id="linkedIn-tooltip" 
                data-tooltip-content="LinkedIn" 
                data-tooltip-place="top"
                href={socialLinks.linkedIn}><img src={linkedIn}  alt="" /></a>
                <Tooltip id="resume-tooltip" />
                <a
                data-tooltip-id="resume-tooltip" 
                data-tooltip-content="Resume/CV" 
                data-tooltip-place="top"
                href={socialLinks.resume} download><img src={resume} alt="" style={{width:"50%"}}  /></a>
                <Tooltip id="github-tooltip" />
                <a
                data-tooltip-id="github-tooltip" 
                data-tooltip-content="GitHub" 
                data-tooltip-place="top"
                href={socialLinks.github}><img src={gitHub} alt="" style={{width:"55%"}} /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
