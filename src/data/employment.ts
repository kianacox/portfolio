import { IconType } from 'react-icons';
import { RiNextjsFill } from 'react-icons/ri';
import { FaGitAlt, FaJs, FaHtml5, FaReact, FaJenkins, FaDocker, FaGithub, FaFigma, FaAws } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { MdCss } from 'react-icons/md';
import { SiJest, SiRedux, SiTestinglibrary, SiVite, SiCypress, SiYarn } from 'react-icons/si';

export type Skill = {
  name: string;
  icon: IconType;
};

export type EmploymentEntry = {
  id: string;
  title: string;
  company: string;
  description: string;
  date: string;
  skills: Skill[];
};

export const employmentHistory: EmploymentEntry[] = [
  {
    id: 'salecycle',
    title: 'Senior Frontend Engineer',
    company: 'SaleCycle',
    description:
      'Architected a monorepo migration using Yarn Workspaces and led a Webpack-to-Vite build tooling overhaul, halving dev startup times. Refactored a broken Cypress E2E suite that had been bypassed in CI — achieving a 78% reduction in pipeline duration and restoring it as a genuine quality gate. Engineered a greenfield RCS template editor end-to-end — from stakeholder requirement gathering through wireframes to a production-ready tool with full Cypress coverage. Implemented AWS RUM for real user monitoring and mentor junior and mid-level engineers through PR reviews and workshops on testing and state management.',
    date: 'Sep 2025 - Present',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'TypeScript', icon: BiLogoTypescript },
      { name: 'Vite', icon: SiVite },
      { name: 'Cypress', icon: SiCypress },
      { name: 'AWS', icon: FaAws },
      { name: 'Yarn', icon: SiYarn },
    ],
  },
  {
    id: 'flutter',
    title: 'Software Engineer',
    company: 'Flutter UK&I',
    description:
      'Core contributor to a multi-brand migration quest serving 9.8M+ users. Spearheaded a testing strategy overhaul, mentored junior devs, and helped forge a scalable design system through close collaboration with designers. Built themeable UI components now powering Skybet, PaddyPower, and Betfair experiences, allowing for code to be reused across brands saving time and effort.',
    date: '2024 - Sep 2025',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'JavaScript', icon: FaJs },
      { name: 'Testing Library', icon: SiTestinglibrary },
      { name: 'Workflows', icon: FaGithub },
      { name: 'Design Systems', icon: FaFigma },
    ],
  },
  {
    id: 'sbg',
    title: 'Software Engineer',
    company: 'Sky Betting & Gaming',
    description:
      'Delivered UI experiments and navigation enhancements to boost content discoverability and user engagement. Designed and shipped A/B-tested features rolled out to 10-50% of users via Kuzzle. Measured impact through click-through and game launch metrics; successful variants were adopted across the platform. Returned from parental leave delivering production-ready features under tight deadlines.',
    date: '2023 - 2024',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'Jenkins', icon: FaJenkins },
      { name: 'Jest', icon: SiJest },
      { name: 'TypeScript', icon: BiLogoTypescript },
      { name: 'Docker', icon: FaDocker },
    ],
  },
  {
    id: 'tech-academy',
    title: 'Tech Academy Graduate',
    company: 'Sky Betting & Gaming',
    description:
      'Balanced real-world engineering work with completing a Masters degree. Gained XP in modern frontend tools while contributing to the migration of the Sky Casino product to Next.js and shipping experiments and UI upgrades with measurable impact. Explored performance optimisation in my dissertation, demonstrating how moving in-codebase images to S3 and converting them to WebP reduced build times and image payloads.',
    date: '2021 - 2023',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'Git', icon: FaGitAlt },
      { name: 'TypeScript', icon: BiLogoTypescript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: MdCss },
    ],
  },
];
