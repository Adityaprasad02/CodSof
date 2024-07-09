import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider,createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Projects from './Projects';
import { Link, Element } from 'react-scroll';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelopeOpen } from 'react-icons/fa';

const activeClassName = 'nav-item-active';

const darkTheme = {
  background: 'black',
  color: '#FFFFFF',
  accent: '#BB86FC',
  secondary: '#16031f',
  text: '#B0B0B0',
  border: '#241b2e9c'
};

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content:center;
  padding: 20px 40px;
  background: ${({ theme }) => theme.background};
  position: fixed;
  width: 83%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link).attrs({ activeClass: activeClassName })`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.${activeClassName} {
    color: orange !important; /* Ensure the color override is applied */
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  svg {
    margin-right: 8px;
  }
`;

// Global styles to reset browser defaults
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20vh;
  padding: 100px 20px 60px 20px;
  position: relative;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 6px solid ${({ theme }) => theme.accent};
  margin-bottom: 20px;
`;


const Header = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accent};
`;

const SubHeader = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const Icon = styled(motion.a)`
  color: ${({ theme }) => theme.color};
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Section = styled.div`
  padding: 40px 20px;
  text-align: center;
  background: ${({ background }) => background || 'transparent'};
`;

const SectionHeader = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accent};
`;

const TextSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
  background: ${({ background }) => background || 'transparent'};
`;

const TextBox = styled.div`
  flex: 1;
  margin: 0 10px;
  background: ${({ theme }) => theme.border};
  padding: 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
`;

const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      <Navbar>
        <NavLinks>
          <NavLink to="home" smooth={true} duration={800}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="projects" smooth={true} duration={800}>
            <FaProjectDiagram /> Projects
          </NavLink>
          <NavLink to="about" smooth={true} duration={800}>
            <FaUser /> About
          </NavLink>
          <NavLink to="contact" smooth={true} duration={800}>
            <FaEnvelopeOpen /> Contact
          </NavLink>
        </NavLinks>
      </Navbar>
      <Container>
        <Element name="home">
          <MainSection>
            <ProfileImage src="https://media.licdn.com/dms/image/D4D03AQHfmxSvulmYxQ/profile-displayphoto-shrink_400_400/0/1709050660217?e=1726099200&v=beta&t=qnm66gXpKISfrJ5hTzYUCX7c8qrv5uUbgvjAQ99Z5EE" />
          </MainSection>
        </Element>
        <Section>
          <Header initial="hidden" animate="visible" variants={textVariants}>
            Aditya Prasad Sahoo
          </Header>
          <SubHeader initial="hidden" animate="visible" variants={textVariants}>
            Frontend Developer
          </SubHeader>
          <Icons>
            <Icon href="https://github.com/Adityaprasad02?tab=repositories" target="_blank" initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.5 } }}>
              <FaGithub />
            </Icon>
            <Icon href="https://www.linkedin.com/in/aditya-prasad-sahoo-1a86b01b9/" target="_blank" initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.7 } }}>
              <FaLinkedin />
            </Icon>
            <Icon href="https://twitter.com" target="_blank" initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 0.9 } }}>
              <FaTwitter />
            </Icon>
            <Icon href="mailto:shubhamsahoo230@gmail.com" initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 1.1 } }}>
              <FaEnvelope />
            </Icon>
          </Icons>
        </Section>
        <Element name="projects">
          <Section background={darkTheme.secondary}>
            <SectionHeader initial="hidden" animate="visible" variants={textVariants}>
              Projects
            </SectionHeader>
            <Projects />
          </Section>
        </Element>
        <Element name="about">
          <TextSection background={darkTheme.border}>
            <TextBox>
              <h3>About Me</h3>
              <p>
                I am a passionate frontend developer with experience in creating dynamic and responsive web applications.
              </p>
            </TextBox>
            <TextBox>
              <h3>My Skills</h3>
              <p>
                JavaScript, React, CSS, HTML, Git, and more.
              </p>
            </TextBox>
          </TextSection>
        </Element>
        <Element name="contact">
          <Footer>
            &copy; 2024 | ADITYA PRASAD SAHOO. All rights reserved.
          </Footer>
        </Element>
      </Container>
    </ThemeProvider>
  );
}

export default App;
