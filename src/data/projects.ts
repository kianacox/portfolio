export type ProjectEntry = {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
};

export const projects: ProjectEntry[] = [
  {
    title: 'Titch Tattoo',
    description:
      'A high-performance Next.js application for a local tattoo artist, optimised for SEO and AI Overviews, deployed on Vercel. Integrated Google Analytics to inform and automate a high-conversion Google Ads bidding strategy.',
    image: '/titch-tattoo.png',
    link: 'https://www.titchtattoo.com/',
    github: '',
  },
  {
    title: 'Movie Browser',
    description:
      'A movie browser created using React, Redux and Vite, that allows users to search for movies, view their details, and add them to a favourites list.',
    image: '/movie-browser.png',
    link: 'https://movie-browser-fawn.vercel.app/',
    github: 'https://github.com/kianacox/movie-browser',
  },
  {
    title: 'Portfolio',
    description: 'This website! A simple SPA built with Next.js and custom css.',
    image: '/portfolio.png',
    link: 'https://kianacox.dev/',
    github: 'https://github.com/kianacox/portfolio',
  },
];
