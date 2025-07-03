import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import styles from './index.module.scss';
import { RiNextjsFill } from 'react-icons/ri';
import { FaGitAlt } from 'react-icons/fa';
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

const EmploymentTmeline: React.FC = () => {
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
      'Core contributor to a multi-brand migration quest serving 9.8M+ users. Spearheaded a testing strategy overhaul, mentored junior devs, and helped forge a scalable design system by collaborating with designers and taming token chaos. Built themeable UI components now powering Sky, PaddyPower, and Betfair experiences.',
    date: '2024 - Present',
  };

  return (
    <Timeline>
      {/* {Flutter} */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            marginLeft: '10px',
            marginTop: '10px',
            padding: '10px',
          }}
        >
          <div className={styles.skillsContainer}>
            <h3>{flutterContent.date}</h3>
            <h4>Skills</h4>
            <ul className={styles.skillsListItems}>
              {skillsFlutter.map((skill) => (
                <div key={skill.name} className={styles.skillsListItem}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </ul>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{ border: '1px solid #00ff96', boxShadow: '0 0 10px rgba(0, 255, 150, 0.5)' }}
          />
          <TimelineConnector
            sx={{ border: '1px solid #00ff96', boxShadow: '0 0 10px rgba(0, 255, 150, 0.5)' }}
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            border: '1px solid #ffd700',
            boxShadow: '0 0 10px rgba(233, 203, 11, 0.5)',
            borderRadius: '8px',
            marginLeft: '10px',
            marginTop: '10px',
            padding: '10px',
          }}
        >
          <h3>{flutterContent.title}</h3>
          <strong>{flutterContent.company}</strong>
          <p>{flutterContent.description}</p>
        </TimelineContent>
      </TimelineItem>
      {/* {SBG} */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            marginLeft: '10px',
            marginTop: '10px',
            padding: '10px',
          }}
        >
          <div className={styles.skillsContainer}>
            <h3>{sbgContent.date}</h3>
            <h4>Skills</h4>
            <ul className={styles.skillsListItems}>
              {skillsSBG.map((skill) => (
                <div key={skill.name} className={styles.skillsListItem}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </ul>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{ border: '1px solid #00ff96', boxShadow: '0 0 10px rgba(0, 255, 150, 0.5)' }}
          />
          <TimelineConnector
            sx={{ border: '1px solid #00ff96', boxShadow: '0 0 10px rgba(0, 255, 150, 0.5)' }}
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            border: '1px solid #ffd700',
            boxShadow: '0 0 10px rgba(233, 203, 11, 0.5)',
            borderRadius: '8px',
            marginLeft: '10px',
            marginTop: '10px',
            padding: '10px',
          }}
        >
          <h3>{sbgContent.title}</h3>
          <strong>{sbgContent.company}</strong>
          <p>{sbgContent.description}</p>
        </TimelineContent>
      </TimelineItem>
      {/* {Tech Academy} */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            marginLeft: '10px',
            marginTop: '10px',
            padding: '10px',
          }}
        >
          <div className={styles.skillsContainer}>
            <h3>{techAcademyContent.date}</h3>
            <h4>Skills</h4>
            <ul className={styles.skillsListItems}>
              {skillsTechGrad.map((skill) => (
                <div key={skill.name} className={styles.skillsListItem}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </ul>
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{ border: '1px solid #00ff96', boxShadow: '0 0 10px rgba(0, 255, 150, 0.5)' }}
          />
          <TimelineConnector
            sx={{ border: '1px solid #00ff96', boxShadow: '0 0 10px rgba(0, 255, 150, 0.5)' }}
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            border: '1px solid #ffd700',
            boxShadow: '0 0 10px rgba(233, 203, 11, 0.5)',
            borderRadius: '8px',
            marginLeft: '10px',
            marginTop: '10px',
            padding: '10px',
          }}
        >
          <h3>{techAcademyContent.title}</h3>
          <strong>{techAcademyContent.company}</strong>
          <p>{techAcademyContent.description}</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default EmploymentTmeline;
