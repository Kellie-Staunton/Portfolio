/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kellie Staunton's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kellie Staunton's Portfolio",
    type: "website",
    url: "http://https://kellie-staunton.github.io/Portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Kellie Staunton",
  logo_name: "KellieStaunton",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1MNTll8csi0pdiEnNfhA2w-3iDGgOwTC0/view?usp=sharing",
  portfolio_repository: "https://github.com/Kellie-Staunton/Portfolio",
  githubProfile: "https://github.com/Kellie-Staunton",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Kellie-Staunton/Portfolio",
  // linkedin: "https://www.linkedin.com/in/kellie-staunton-749375304/",
  // gmail: "kellie.staunton5@mail.dcu.ie",
  // facebook: "https://www.facebook.com/kellie.staunton",
  // instagram: "https://www.instagram.com/kellie98staunton/"

  {
    name: "Github",
    link: "https://github.com/Kellie-Staunton",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kellie-staunton-749375304/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kellie.staunton5@mail.dcu.ie",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/kellie.staunton/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://https://www.instagram.com/kellie98staunton/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "https://icon-sets.iconify.design/logos/tableau/",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "https://icon-sets.iconify.design/vscode-icons/file-type-excel/",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "https://icon-sets.iconify.design/devicon/python-wordmark/",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "https://icon-sets.iconify.design/tabler/sql/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
         {
          skillName: "PowerBI",
          fontAwesomeClassname: "https://icon-sets.iconify.design/simple-icons/powerbi/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
      ],
    },
   
    },
    {
      title: "Operations and Managment",
      fileName: "Op Management",
      skills: [
        "⚡ Experience working managing teams in multiple environments including both service customer facing roles and retail backend roles. ",

      ],
      softwareSkills: [
        {
          skillName: "Opera",
          fontAwesomeClassname: "https://icon-sets.iconify.design/devicon/opera-wordmark/",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
            
        {
          skillName: "Word",
          fontAwesomeClassname: "https://icon-sets.iconify.design/vscode-icons/file-type-word/",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "https://icon-sets.iconify.design/vscode-icons/file-type-powerpoint/",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      
    },
  ],
};


const degrees = {
  degrees: [
    {
      title: "Dublin City University",
      subtitle: "Bachelor Of Business Studies with a specialism in Data Analytics",
      logo_path: "dcu_logo_stacked_slate_yellow-01.png",
      alt_name: "DCU",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ During my time at DCU I have studied modules in the core business subjects of Marketing, Finance, Economics, Operations and Entrepreneurship. ",
        "⚡ In year 3 I completed an internship with Fitness Equipment Ireland during which time I worked directly along side the founder in property management, accounts, payroll, and procurement and supply chain management.",
        "⚡ In my final year of DCU I specialised in Data Analytics while also taking some additional supply chain modules in Lean Management. During this year I developed my data analytics skills while engaging with Python,SQL,PowerBI, and GitHub. ",
      ],
      website_link: "https://www.dcu.ie/",
    },
  
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Extracurricular Activities",
  description:
    "I have worked in a range of different industries and roles. From setting up my own summer sports camps while in secondary school to quickly climbing the ranks in the service industry to working in a miltifaceted role touching off all business departments on my internship there is no challenge that I will not face and overcome. ",
  header_image_path: "HeadshotPro Avatar 2024-04-21T00-59-51-967Z.png",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Procurment Manager",
          company: "Fitness Equipment Ireland",
          company_url: "https://www.fitnessequipmentireland.ie/",
          logo_path: "FEI.png",
          duration: "February 2023 - Present",
          location: "Dublin, Ireland",
          description:
            "Inventory and Supply Chain Management as well as sourcing new products for the company. Working with supplier and logistic companies to fulfill the needs of the Company. ",
          color: "#000000",
        },
        {
          title: "Assistant Food and Beverage Manager",
          company: "Arlington Hotel",
          company_url: "https://arlington.ie/",
          logo_path: "ar.png",
          duration: "June 2020 - May 2022",
          location: "Dublin, Ireland",
          description:
            "Managing a team of 20 staff for nightly banquetting events.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Multifaceted Role:Accounts, Property Manager, Procurement, Supply Chain.",
          company: "Fitness Equipment Ireland",
          company_url: "https://www.fitnessequipmentireland.ie/",
          logo_path: "FEI.png",
          duration: "June 2022 - February 2023",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Extracurricular",
      experiences: [
        {
          title: "Badminton",
          company_url: "https://www.instagram.com/dcubadmintonclub/",
          logo_path: "badminton",
          color: "#D83B01",
         
        },
        {
           title: "Running",
          company_url: "https://www.instagram.com/slowgirlruns_dublin/",
          logo_path: "run.jpg",
          color: "#D83B01",
        },
        {
          title: "Baking & Cooking",
          company_url: "https://vm.tiktok.com/ZGeHWe7vU/",
          logo_path: "pasta1.jpg",
          color: "#000000",
        },
        {
          title: "Hiking",
          company_url: "https://www.alltrails.com/ireland",
          logo_path: "hike1.jpg",
          color: "#000000",
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
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dublin, Ireland",
    locality: "Dublin 8",
    country: "Oreland",
    region: "Dublin",
    postalCode: "D08NP6Y",
    streetAddress: "Ardee Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/JGEiJJSpLTYsa8dAA",
  },
  phoneSection: {
    title: "Phone No.",
    subtitle: "+35383 899 6074",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
