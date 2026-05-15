import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
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
import { SiVite } from 'react-icons/si';
import { SiCypress } from 'react-icons/si';
import { SiYarn } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { COLORS } from '../../../constants/colors';
import { motion, Variants } from 'motion/react';
import { isMobile } from 'react-device-detect';

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

  const skillsSaleCycle = [
    { name: 'React', icon: <FaReact size={iconSize} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={iconSize} /> },
    { name: 'Vite', icon: <SiVite size={iconSize} /> },
    { name: 'Cypress', icon: <SiCypress size={iconSize} /> },
    { name: 'AWS', icon: <FaAws size={iconSize} /> },
    { name: 'Yarn', icon: <SiYarn size={iconSize} /> },
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
      'Balanced real-world engineering work with completing a Masters degree. Gained XP in modern frontend tools while contributing to the migration of the Sky Casino product to Next.js and shipping experiments and UI upgrades with measurable impact. Explored performance optimisation in my dissertation, demonstrating how moving in-codebase images to S3 and converting them to WebP reduced build times and image payloads.',
    date: '2021 - 2023',
  };

  const sbgContent = {
    title: 'Software Engineer',
    company: 'Sky Betting & Gaming',
    description:
      'Delivered UI experiments and navigation enhancements to boost content discoverability and user engagement. Designed and shipped A/B-tested features rolled out to 10-50% of users via Kuzzle. Measured impact through click-through and game launch metrics; successful variants were adopted across the platform. Returned from parental leave delivering production-ready features under tight deadlines.',
    date: '2023 - 2024',
  };

  const saleCycleContent = {
    title: 'Senior Frontend Engineer',
    company: 'SaleCycle',
    description:
      'Architected a monorepo migration using Yarn Workspaces and led a Webpack-to-Vite build tooling overhaul, halving dev startup times. Refactored a broken Cypress E2E suite that had been bypassed in CI — achieving a 78% reduction in pipeline duration and restoring it as a genuine quality gate. Engineered a greenfield RCS template editor end-to-end — from stakeholder requirement gathering through wireframes to a production-ready tool with full Cypress coverage. Implemented AWS RUM for real user monitoring and mentor junior and mid-level engineers through PR reviews and workshops on testing and state management.',
    date: 'Sep 2025 - Present',
  };

  const flutterContent = {
    title: 'Software Engineer',
    company: 'Flutter UK&I',
    description:
      'Core contributor to a multi-brand migration quest serving 9.8M+ users. Spearheaded a testing strategy overhaul, mentored junior devs, and helped forge a scalable design system through close collaboration with designers. Built themeable UI components now powering Skybet, PaddyPower, and Betfair experiences, allowing for code to be reused across brands saving time and effort.',
    date: '2024 - Sep 2025',
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
      <Timeline
        data-testid="employment"
        role="list"
        aria-label="Employment Timeline"
        sx={{
          ...(isMobile && {
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }),
        }}
      >
        {/* {SaleCycle} */}
        <motion.div variants={itemVariants}>
          <TimelineItem
            role="listitem"
            aria-label={`${saleCycleContent.title} at ${saleCycleContent.company}`}
          >
            {!isMobile && (
              <TimelineOppositeContent
                sx={{
                  marginLeft: '10px',
                  marginTop: '10px',
                  padding: '10px',
                }}
              >
                <div className={styles.skillsContainer}>
                  <h3 className={styles.presentTitle}>{saleCycleContent.date}</h3>
                  <h4 id="salecycle-skills-heading" data-testid="salecycle-skills-heading">
                    Skills
                  </h4>
                  <ul
                    className={styles.skillsListItems}
                    aria-labelledby="salecycle-skills-heading"
                    data-testid="salecycle-skills-list"
                  >
                    {skillsSaleCycle.map((skill) => (
                      <div key={skill.name} className={styles.skillsListItem} role="listitem">
                        <span aria-hidden="true">{skill.icon}</span>
                        <p>{skill.name}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </TimelineOppositeContent>
            )}
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
              <h3 id="salecycle-title" className={styles.title}>
                {saleCycleContent.title}
              </h3>
              <strong className={styles.company}>{saleCycleContent.company}</strong>
              <p aria-labelledby="salecycle-title" className={styles.description}>
                {saleCycleContent.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        {/* {Flutter} */}
        <motion.div variants={itemVariants}>
          <TimelineItem
            role="listitem"
            aria-label={`${flutterContent.title} at ${flutterContent.company}`}
          >
            {!isMobile && (
              <TimelineOppositeContent
                sx={{
                  marginLeft: '10px',
                  marginTop: '10px',
                  padding: '10px',
                }}
              >
                <div className={styles.skillsContainer}>
                  <h3>{flutterContent.date}</h3>
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
            )}
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
              <h3 id="flutter-title" className={styles.title}>
                {flutterContent.title}
              </h3>
              <strong className={styles.company}>{flutterContent.company}</strong>
              <p aria-labelledby="flutter-title" className={styles.description}>
                {flutterContent.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        {/* {SBG} */}
        <motion.div variants={itemVariants}>
          <TimelineItem role="listitem" aria-label={`${sbgContent.title} at ${sbgContent.company}`}>
            {!isMobile && (
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
            )}
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
              <h3 id="sbg-title" className={styles.title}>
                {sbgContent.title}
              </h3>
              <strong className={styles.company}>{sbgContent.company}</strong>
              <p aria-labelledby="sbg-title" className={styles.description}>
                {sbgContent.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        {/* {Tech Academy} */}
        <motion.div variants={itemVariants}>
          <TimelineItem
            role="listitem"
            aria-label={`${techAcademyContent.title} at ${techAcademyContent.company}`}
          >
            {!isMobile && (
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
            )}
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
              <h3 id="tech-academy-title" className={styles.title}>
                {techAcademyContent.title}
              </h3>
              <strong className={styles.company}>{techAcademyContent.company}</strong>
              <p aria-labelledby="tech-academy-title" className={styles.description}>
                {techAcademyContent.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      </Timeline>
    </motion.div>
  );
};

const EmploymentTmeline = React.memo(EmploymentTmelineComponent);
export default EmploymentTmeline;
