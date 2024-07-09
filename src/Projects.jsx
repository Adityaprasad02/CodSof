import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: #802acb80;
  color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #9f99d0;
`;

const projects = [
  {
     title: 'E-commerce Project',
    description: 'An e-commerce project for shopping with features like adding products,quantity of product.created with React-router-App.',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.TmoltIGR4BeSc-kiby4mHQHaEt&pid=Api&P=0&h=180',
    link : 'https://adityaprasadsahoo.netlify.app'
  },
  {
    title: 'Password Generator',
    description: 'A password generator which suggests you a strong password adding characters or numbers.It lets you copy the password. ',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.0UcpCX47mTRsYMQpTmn3yAHaEd&pid=Api&P=0&h=180',
    link : 'https://adityaprasad02.github.io/Password-Generator/',
  },
  {
    title: 'Task Tracker',
    description: 'Create,Add,Delete your tasks using Task-Tracker application. I made it using concepts of complex javascript ',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Tai24BuXPmuSiOsItwzedgHaFj&pid=Api&P=0&h=180',
    link : 'https://adityaprasad02.github.io/todoList/',
  },
  {
    title: 'The Number Guesser',
    description: 'A game made in the beginning of my journey of learning Frontend developement using HTML,CSS and javascript.',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.bA3s18nYBm1awWdVWEckVwHaEQ&pid=Api&P=0&h=180',
    link : 'https://adityaprasad02.github.io/The-Guess-Game/',
  },
];

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin-bottom: 20px;
`;

const ProjectListItem = styled.li`
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Projects = () => {
  return (
    <>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectListItem key={index}>
            <Link to={`project-${index}`} smooth={true} duration={800}>
              <div>{project.title}</div>
            </Link>
          </ProjectListItem>
        ))}
      </ProjectList>
      <ProjectContainer>
      {projects.map((project, index) => (
  <Element name={`project-${index}`} key={index}>
    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ProjectCard whileHover={{ scale: 1.05 }}>
        <ProjectImage src={project.imageUrl} alt={project.title} />
        <ProjectContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectContent>
      </ProjectCard>
    </a>
  </Element>
))}

      </ProjectContainer>
    </>
  );
};

export default Projects;
