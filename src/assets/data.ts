const urlGithub = "https://github.com/Gombeng";

export const data = {
  hero: {
    name: "Syahrizal Ardana",
    position: "Full-stack Developer",
    // 20 words for ai suggestions
    desc: "Building scalable applications using React, Node.js, and MongoDB. Passionate about clean code, responsive design, and creating seamless user experiences.",
    links: [
      {
        title: "cv",
        link: "https://drive.google.com/file/d/1b6F_gC-IneAy8xJCu5st9P_yunNdrCEM/view?usp=sharing",
      },
      {
        title: "linkedin",
        link: "https://www.linkedin.com/in/msrgombeng/",
      },
      {
        title: "github",
        link: "https://www.github.com/Gombeng/",
      },
      {
        title: "tiktok",
        link: "https://www.tiktok.com/@dev_syahrizal",
      },
    ],
  },
  about: {
    experiences: [
      {
        position: "Full-stack Developer",
        company: "AIA Singapore",
        start: "Mar 2023",
        end: "Present",
        location: {
          name: "Batam",
          maps: "https://maps.app.goo.gl/j1dP4M4uUjtkD4o37",
        },
        // implement ai for wording suggestions?
        tasks: [
          "Developed and maintained responsive frontend applications using React.js, Node.js, and Material-UI.",
          "Collaborated with cross-functional teams to deliver insurance-related applications, ensuring 100% on-time delivery.",
        ],
      },
      {
        position: "Mobile Developer",
        company: "IL Indonesia",
        start: "Sep 2021",
        end: "Jan 2022",
        location: {
          name: "Batam",
          maps: "https://maps.app.goo.gl/R5URdhGZpwYw4e6w9",
        },
        tasks: [
          "Led end-to-end development of 2 mobile applications.",
          "Optimized app performance, reducing load times by 40% before client delivery.",
        ],
      },
      {
        position: "Front-end Developer",
        company: "Inforsys Indonesia",
        start: "Mar 2021",
        end: "Aug 2021",
        location: {
          name: "Batam",
          maps: "https://maps.app.goo.gl/vne7vhyv2rTo85V67",
        },
        tasks: [
          "Maintained and enhanced SaaS-based ERP software using AngularJS.",
          "Participated in Agile ceremonies, ensuring timely delivery of incremental updates.",
        ],
      },
    ],
    education: [
      { year: "2015", event: "High School!" },
      { year: "2018", event: "University!!" },
      { year: "2023", event: "Graduated!!!" },
    ],
  },
  projects: [
    {
      title: "Cashk",
      desc: 'Has a slogan "Your money, simplified!" build this app for tracking my personal finances.',
      url: {
        repo: `${urlGithub}/cashk`,
        demo: "https://cashk.vercel.app/",
      },
    },
    {
      title: "Denote",
      desc: "Pour all your briliant idea to a note, so you can execute later. Actually this is my first Fullstack project that I build when in college",
      url: {
        repo: `${urlGithub}/fe-denote`,
        demo: "https://denote-mern.vercel.app/",
      },
    },
    {
      title: "Personal Web Portfolio",
      desc: "My personal website to showcases all of my projects, at first this web using CRA & styled components, migrating to vite now.",
      url: {
        repo: `${urlGithub}/react-portfolio`,
        demo: "https://syahrizal-portfolio.vercel.app/",
      },
    },
    {
      title: "Explore the world",
      desc: "Website to search all the information about country all over the world!",
      url: {
        repo: `${urlGithub}/fm-rest-countries-api`,
        demo: "https://fm-rest-countries-api-seven.vercel.app/",
      },
    },
    {
      title: "GIS Website",
      desc: "Data visiualization about drugs & tourist spread at Tanjungpinang.",
      url: {
        repo: `${urlGithub}/web-gis-react`,
        demo: "https://web-gis-react.vercel.app/",
      },
    },
  ],
  techStacks: [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "mongodb",
    "express",
    "react",
    "nodejs",
    "angularjs",
    "svelte",
    "nextjs",
    "vitejs",
    "git",
    "github",
    "gitlab",
    "bitbucket",
    "ionic",
    "mysql",
    "bootstrap",
    "sass",
    "jira",
    "figma",
    "materialui",
  ],
  tabLink: [
    {
      title: "Hero",
      href: "hero",
    },
    {
      title: "Experiences",
      href: "experiences",
    },
    {
      title: "Work",
      href: "work",
    },
  ],
  themes: [
    // "abyss",
    // "aqua",
    // "business",
    // "coffee",
    // "cupcake",
    // "cmyk",
    // "dark",
    // "forest",
    // "halloween",
    // "lemonade",
    // "luxury",
    // "night",
    // "sunset",
    // "synthwave",

    "acid",
    "autumn",
    "black",
    "bumblebee",
    "caramellatte",
    "corporate",
    "cyberpunk",
    "dim",
    "dracula",
    "emerald",
    "fantasy",
    "garden",
    "light",
    "lofi",
    "nord",
    "pastel",
    "retro",
    "silk",
    "valentine",
    "winter",
    "wireframe",
  ],
};
