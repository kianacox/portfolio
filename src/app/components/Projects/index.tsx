import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { projects } from '../../../data/projects';

const ProjectsComponent: React.FC = () => {
  const iconSize = 20;
  return (
    <section data-testid="projects" role="region" aria-label="Personal Projects">
      <h1 id="projects-heading">Personal Projects</h1>
      <div className={styles.projectsSection} aria-labelledby="projects-heading">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={styles.projectCard}
            data-testid={`project-${project.title}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            role="article"
            aria-labelledby={`project-title-${index}`}
          >
            <h2 id={`project-title-${index}`}>{project.title}</h2>

            <Image
              src={project.image}
              alt={`Screenshot of ${project.title} project`}
              width={200}
              height={120}
            />
            <p className={styles.projectDescription}>{project.description}</p>
            <div
              className={styles.projectLinks}
              role="group"
              aria-label={`${project.title} project links`}
            >
              <a
                href={project.link}
                aria-label={`Visit ${project.title} live website`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="live-website-link"
                className={styles.liveWebsiteLink}
              >
                <CgWebsite size={iconSize} aria-hidden="true" />
                <span>Live Website</span>
                <span className="sr-only">Live Website</span>
              </a>
              {project.github && (
                <a
                  href={project.github}
                  aria-label={`View ${project.title} source code on GitHub`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="github-link"
                  className={styles.githubLink}
                >
                  <FaGithub size={iconSize} aria-hidden="true" />
                  <span>GitHub Repository</span>
                  <span className="sr-only">GitHub Repository</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = React.memo(ProjectsComponent);
export default Projects;
