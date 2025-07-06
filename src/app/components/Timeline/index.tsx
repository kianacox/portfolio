import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import styles from './index.module.scss';
import { RiNextjsFill } from 'react-icons/ri';
import { FaGitAlt, FaJs } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaHtml5 } from 'react-icons/fa';
import { MdCss } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { FaJenkins } from 'react-icons/fa';
import { SiJest } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiTestinglibrary } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { COLORS } from '../../../constants/colors';
import { motion, Variants } from 'motion/react';
import React from 'react';

const EmploymentTmelineComponent: React.FC = () => {
  const iconSize = 32;

  const skillsTechGrad = [
    { name: 'React', icon: <FaReact size={iconSize} /> },
    { name: 'Next.js', icon: <RiNextjsFill size={iconSize} /> },
    { name: 'Git', icon: <FaGitAlt size={iconSize} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={iconSize} /> },
    { name: 'HTML', icon: <FaHtml5 size={iconSize} /> },
    { name: 'CSS', icon: <MdCss size={iconSize} /> },
  ];

  const skillsSBG = [
    { name: 'React', icon: <FaReact size={iconSize} /> },
    { name: 'Next.js', icon: <RiNextjsFill size={iconSize} /> },
    { name: 'Jenkins', icon: <FaJenkins size={iconSize} /> },
    { name: 'Jest', icon: <SiJest size={iconSize} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={iconSize} /> },
    { name: 'Docker', icon: <FaDocker size={iconSize} /> },
  ];

  const skillsFlutter = [
    { name: 'React', icon: <FaReact size={iconSize} /> },
    { name: 'Redux', icon: <SiRedux size={iconSize} /> },
    { name: 'JavaScript', icon: <FaJs size={iconSize} /> },
    { name: 'Testing Library', icon: <SiTestinglibrary size={iconSize} /> },
    { name: 'Workflows', icon: <FaGithub size={iconSize} /> },
    { name: 'Design Systems', icon: <FaFigma size={iconSize} /> },
  ];

  const techAcademyContent = {
    title: 'Tech Academy Graduate',
    company: 'Sky Betting & Gaming',
    description:
      'Balanced real-world engineering work with completing a Masters degree. Gained XP in modern frontend tools while helping migrate the product to Next.js and shipping experiments and UI upgrades with measurable impact.',
    date: '2021 - 2023',
  };

  const sbgContent = {
    title: 'Software Engineer',
    company: 'Sky Betting & Gaming',
    description:
      'Delivered UI experiments and navigation upgrades that improved content discoverability and user engagement. Shipped A/B-tested rollouts to up to 50% of users, achieving measurable gains in click-through and game launches. Returned post-parental leave and delivered production-ready features under tight deadlines.',
    date: '2023 - 2024',
  };

  const flutterContent = {
    title: 'Software Engineer',
    company: 'Flutter UK&I',
    description:
      'Core contributor to a multi-brand migration quest serving 9.8M+ users. Spearheaded a testing strategy overhaul, mentored junior devs, and helped forge a scalable design system by collaborating with designers. Built themeable UI components now powering Skybet, PaddyPower, and Betfair experiences.',
    date: '2024 - Present',
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <Timeline data-testid="employment" role="list" aria-label="Employment Timeline">
        {/* {Flutter} */}
        <motion.div variants={itemVariants}>
          <TimelineItem
            role="listitem"
            aria-label={`${flutterContent.title} at ${flutterContent.company}`}
          >
            <TimelineOppositeContent
              sx={{
                marginLeft: '10px',
                marginTop: '10px',
                padding: '10px',
              }}
            >
              <div className={styles.skillsContainer}>
                <h3 className={styles.presentTitle}>{flutterContent.date}</h3>
                <h4 id="flutter-skills-heading" data-testid="flutter-skills-heading">
                  Skills
                </h4>
                <ul
                  className={styles.skillsListItems}
                  aria-labelledby="flutter-skills-heading"
                  data-testid="flutter-skills-list"
                >
                  {skillsFlutter.map((skill) => (
                    <div key={skill.name} className={styles.skillsListItem} role="listitem">
                      <span aria-hidden="true">{skill.icon}</span>
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  border: `1px solid ${COLORS['primary-accent']}`,
                  boxShadow: `0 0 10px ${COLORS['primary-accent']}80`,
                  backgroundColor: COLORS.text,
                }}
              />
              <TimelineConnector
                sx={{
                  border: `1px solid ${COLORS['primary-accent']}`,
                  boxShadow: `0 0 10px ${COLORS['primary-accent']}80`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                border: `1px solid ${COLORS.highlights}`,
                boxShadow: `0 0 10px ${COLORS.highlights}80`,
                borderRadius: '8px',
                marginLeft: '10px',
                marginTop: '10px',
                padding: '10px',
              }}
              role="article"
            >
              <h3 id="flutter-title">{flutterContent.title}</h3>
              <strong>{flutterContent.company}</strong>
              <p aria-labelledby="flutter-title">{flutterContent.description}</p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        {/* {SBG} */}
        <motion.div variants={itemVariants}>
          <TimelineItem role="listitem" aria-label={`${sbgContent.title} at ${sbgContent.company}`}>
            <TimelineOppositeContent
              sx={{
                marginLeft: '10px',
                marginTop: '10px',
                padding: '10px',
              }}
            >
              <div className={styles.skillsContainer}>
                <h3>{sbgContent.date}</h3>
                <h4 id="sbg-skills-heading" data-testid="sbg-skills-heading">
                  Skills
                </h4>
                <ul
                  className={styles.skillsListItems}
                  aria-labelledby="sbg-skills-heading"
                  data-testid="sbg-skills-list"
                >
                  {skillsSBG.map((skill) => (
                    <div key={skill.name} className={styles.skillsListItem} role="listitem">
                      <span aria-hidden="true">{skill.icon}</span>
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  border: `1px solid ${COLORS['primary-accent']}`,
                  boxShadow: `0 0 10px ${COLORS['primary-accent']}80`,
                  backgroundColor: COLORS.text,
                }}
              />
              <TimelineConnector
                sx={{
                  border: `1px solid ${COLORS['primary-accent']}`,
                  boxShadow: `0 0 10px ${COLORS['primary-accent']}80`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                border: `1px solid ${COLORS.highlights}`,
                boxShadow: `0 0 10px ${COLORS.highlights}80`,
                borderRadius: '8px',
                marginLeft: '10px',
                marginTop: '10px',
                padding: '10px',
              }}
              role="article"
            >
              <h3 id="sbg-title">{sbgContent.title}</h3>
              <strong>{sbgContent.company}</strong>
              <p aria-labelledby="sbg-title">{sbgContent.description}</p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        {/* {Tech Academy} */}
        <motion.div variants={itemVariants}>
          <TimelineItem
            role="listitem"
            aria-label={`${techAcademyContent.title} at ${techAcademyContent.company}`}
          >
            <TimelineOppositeContent
              sx={{
                marginLeft: '10px',
                marginTop: '10px',
                padding: '10px',
              }}
            >
              <div className={styles.skillsContainer}>
                <h3>{techAcademyContent.date}</h3>
                <h4 id="tech-academy-skills-heading" data-testid="tech-academy-skills-heading">
                  Skills
                </h4>
                <ul
                  className={styles.skillsListItems}
                  aria-labelledby="tech-academy-skills-heading"
                  data-testid="tech-academy-skills-list"
                >
                  {skillsTechGrad.map((skill) => (
                    <div key={skill.name} className={styles.skillsListItem} role="listitem">
                      <span aria-hidden="true">{skill.icon}</span>
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  border: `1px solid ${COLORS['primary-accent']}`,
                  boxShadow: `0 0 10px ${COLORS['primary-accent']}80`,
                  backgroundColor: COLORS.text,
                }}
              />
              <TimelineConnector
                sx={{
                  border: `1px solid ${COLORS['primary-accent']}`,
                  boxShadow: `0 0 10px ${COLORS['primary-accent']}80`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                border: `1px solid ${COLORS.highlights}`,
                boxShadow: `0 0 10px ${COLORS.highlights}80`,
                borderRadius: '8px',
                marginLeft: '10px',
                marginTop: '10px',
                padding: '10px',
              }}
              role="article"
            >
              <h3 id="tech-academy-title">{techAcademyContent.title}</h3>
              <strong>{techAcademyContent.company}</strong>
              <p aria-labelledby="tech-academy-title">{techAcademyContent.description}</p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      </Timeline>
    </motion.div>
  );
};

const EmploymentTmeline = React.memo(EmploymentTmelineComponent);
export default EmploymentTmeline;
