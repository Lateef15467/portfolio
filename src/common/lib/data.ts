import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;
export const experiencesData = [
  {
    title: 'Freelance Web Developer',
    location: 'Remote',
    description:
      'Worked as a freelance web developer for clients worldwide. Delivered responsive websites, ecommerce platforms, and portfolio sites using the MERN stack and Tailwind CSS.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jan 2023 - Present',
  },
  {
    title: 'Data Entry Specialist',
    location: 'Remote',
    description:
      'Performed accurate data entry, record management, and administrative support tasks. Ensured high attention to detail and timely completion of client projects.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jan 2022 - Dec 2023',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
 {
  title: 'Mern stack',
  description: `Ecommerce web application built with the MERN stack and Tailwind CSS. Includes product catalog, shopping cart, user authentication, order management, admin product CRUD, and a responsive, mobile-first UI.`,
  tags: ['MERN', 'Tailwind CSS', 'React', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: auditMasterImg,
  link: 'https://shopnowf.vercel.app',
},

  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/lateef15467/portfolio',
  },
 {
  title: 'Hotel Management System',
  description: `A complete hotel management system that streamlines room booking, guest check-in/check-out, staff management, billing, and reporting. Provides an intuitive admin dashboard and a smooth booking experience for guests.`,
  tags: [
    
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'BOOTSTRAP',
  ],
  imageUrl:reactfoodImg  ,
  link: 'https://showk-view-hotal.netlify.app',
}


 
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
