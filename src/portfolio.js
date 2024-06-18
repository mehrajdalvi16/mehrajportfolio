const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mehraj Dalvi | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX and Software ",
  og: {
    title: "Mehraj Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hii!",
  sub: "Mehraj Dalvi",
  logo_name: "Mehraj Dalvi",
  resumeLink:
    "https://drive.google.com/file/d/1zC917P-Va45YA32_fL2PhKf1K8P5t6U3/view",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/mehrajdalvi16",
    },

    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/mehraj-dalvi-920804254",
    },
    {
      siteName: "HashNode",
      iconifyClassname: "simple-icons:hashnode",
      style: {
        color: "#2962ff",
      },
      profileLink: "",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Learning to develop models for deep learning and statistical use cases",
        "⚡ Gaining experience with Computer Vision using OpenCV and NLP projects",
        "⚡ Developing skills in data cleaning, processing, and analysis with Pandas, Tableau, and PowerBI",
        "⚡ Exploring text-to-speech technologies and voice cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Analytics and Visualization Intern",
        subtitle: "Accenture",
        date: "April 2024 - May 2024",
        content: [
          "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture",
          "Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions",
          "Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders",
        ],
      },
      {
        title: "Solution Architecture Intern",
        subtitle: "AWS",
        date: "Dec 2023 - Jan 2024",
        content: [
          "Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it",
          "Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response time",
        ],
      },
      {
        title: "Software Engineering Intern",
        subtitle: "J.P. Morgan Chase&Co",
        date: "Dec 2023 - Jan 2024",
        content: [
          "Set up a local dev environment by downloading the necessary files, tools and dependencies.",
          "Fixed broken files in the repository to make web application output correctly.",
          "Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Sciecne Speciality in Computer Science",
          subtitle: "D.B.J College Chiplun, University Of Mumbai",
          date: "2021 - 2024",
          content: ["CGPA: __/10"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "D.B.J College Chiplun",
          date: "2019 - 2021",
          content: ["Precentage: 82.50%"],
        },
      ],
    },
    // {
    //   title: ["Ranks and Achivements"],
    //   data: [
    //     {
    //       title: "Ranks",
    //       content: [
    //         "#135/854 in Summer Analytics Kaggle Competition by IITG",
    //         "#113/5064 in CV-NLP Hackathon by HackerEarth",
    //       ],
    //     },
    //     {
    //       title: "Achievements",
    //       content: [
    //         "Designing Team Head at ACM-VIT",
    //         "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
    //         "Tableau Analyst & Consumer Badge by Tableau Official",
    //       ],
    //     },
    //   ],
    // },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Consultancy Website",
          subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Created and hosted a website for consultancy providers in Kids Education Domain",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    // {
    //   title: "Tableau Analyst",
    //   subtitle: "Tableau",
    //   logo_path: "tabana-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Consumer",
    //   subtitle: "Tableau",
    //   logo_path: "tabcon-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Problem solving",
    //   subtitle: "HackerRank",
    //   logo_path: "problem-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Python",
    //   subtitle: "HackerRank",
    //   logo_path: "python-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Certificate of Merit",
    //   subtitle: "Summer Analytics | IIT Guwahati",
    //   logo_path: "iitg-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "IITG",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Desktop Qualified Associate",
    //   subtitle: "SimpliLearn",
    //   logo_path: "simplilearn-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Simplilearn",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Question Generation using Transformers",
    //   subtitle: "Udemy",
    //   logo_path: "udemy-01.png",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
    //   alt_name: "Udemy",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "Stanford University",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Visualization",
    //   subtitle: "University of Michigan",
    //   logo_path: "coursera-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "University of Michigan",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Data Scientist Career Track",
    //   subtitle: "DataCamp",
    //   logo_path: "datacamp-01.png",
    //   certificate_link:
    //     "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
    //   alt_name: "DataCamp",
    //   color_code: "#000000",
    // },
    // {
    //   title: "PowerBI Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Masters",
    //   subtitle: "iNeuron.ai",
    //   logo_path: "ineuron-01.png",
    //   certificate_link:
    //     "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available . You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mumbai,400070",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8484064751",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mehrajdalvi16",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mehraj-dalvi-920804254/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mehrajdalvi16@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/soberohan/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
