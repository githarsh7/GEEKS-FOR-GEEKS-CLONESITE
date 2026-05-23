import fs2 from "./assets/full-stack/fsd1.webp";
import fs3 from "./assets/full-stack/fsd2.webp";
import fs1 from "./assets/full-stack/fsd3.webp";

import ds1 from "./assets/data-science/ds1.webp";
import ds2 from "./assets/data-science/ds2.webp";
import ds3 from "./assets/data-science/ds3.webp";

import cs1 from "./assets/cyber/cs1.webp";
import cs2 from "./assets/cyber/cs2.webp";
import cs3 from "./assets/cyber/cs3.webp";

import c1 from "./assets/career/career1.webp";
import c2 from "./assets/career/career2.webp";
import c3 from "./assets/career/career3.webp";

const blogs = [

  // ================= FULL STACK =================

  {
    id: 1,

    title: "MERN Stack Development",

    img: fs2,

    domain: "FullStackDevelopment",

    url: "https://www.geeksforgeeks.org/courses/full-stack-node",

    content: `Full Stack Development involves building both frontend and backend parts of web applications.

MERN Stack is one of the most popular full stack technologies consisting of MongoDB, Express.js, React.js, and Node.js.

Learning MERN Stack helps developers create scalable, responsive, and modern applications.

Companies are actively hiring MERN developers because of the growing demand for dynamic web applications.

Building real-world projects using MERN Stack improves your understanding of APIs, databases, authentication systems, deployment, and frontend-backend integration.`
  },

  {
    id: 2,

    title: "6 Essential Prerequisites For Learning ReactJS",

    img: fs3,

    domain: "FullStackDevelopment",

    url: "https://www.geeksforgeeks.org/reactjs-tutorials/",

    content: `ReactJS is one of the most widely used JavaScript libraries for building user interfaces.

Before learning React, developers should have strong knowledge of HTML, CSS, JavaScript, ES6 concepts, and DOM manipulation.

React makes it easier to create reusable UI components and fast single-page applications.

Understanding React fundamentals opens the door to modern frontend development opportunities.`
  },

  {
    id: 3,

    title: "Top 10 JavaScript Projects for Resume",

    img: fs1,

    domain: "FullStackDevelopment",

    url: "https://www.geeksforgeeks.org/blogs/top-javascript-projects-for-resume/",

    content: `JavaScript projects help beginners and advanced developers strengthen their problem-solving and frontend development skills.

Building projects like calculators, to-do apps, weather apps, and interactive dashboards improves your understanding of DOM manipulation, APIs, events, and asynchronous programming.

Practical projects also help developers build strong portfolios for internships and software jobs.`
  },

  // ================= DATA SCIENCE =================

  {
    id: 4,

    title: "11 Industries That Benefits the Most From Data Science",

    img: ds1,

    domain: "DataScience",

    url: "https://www.geeksforgeeks.org/blogs/11-industries-that-benefits-the-most-from-data-science/",

    content: `Data science has been effective in tackling many real-world problems and is being increasingly adopted across industries to power more intelligent and better-informed decision-making.

With the increased use of computers for day-to-day business and personal operations, there is a demand for intelligent machines that can learn human behavior and work patterns.

This brings Data Science and Big Data Analytics to the forefront.`
  },

  {
    id: 5,

    title: "What is Data Science?",

    img: ds2,

    domain: "DataScience",

    url: "https://www.geeksforgeeks.org/data-science/data-science/",

    content: `Data science is the study of data used to extract meaningful insights for business decisions.

It combines mathematics, computing, machine learning, statistics, and domain knowledge to solve real-world problems and uncover hidden patterns.

Data scientists use tools and algorithms to analyze large amounts of information and support data-driven decisions.`
  },

  {
    id: 6,

    title: "The Role of Data Science in Everyday Life",

    img: ds3,

    domain: "DataScience",

    url: "https://www.geeksforgeeks.org/data-science/the-role-of-data-science-in-everyday-life/",

    content: `In today's technology-driven world, data science has a huge impact on everyday life.

From Netflix recommendations and YouTube suggestions to medical predictions and fraud detection systems, data science powers many intelligent systems.

Businesses, healthcare, transportation, and education sectors rely heavily on data science to improve efficiency and decision-making.`
  },

  // ================= CYBER SECURITY =================

  {
    id: 7,

    title: "Introduction to Cyber Security",

    img: cs1,

    domain: "CyberSecurity",

    url: "https://www.geeksforgeeks.org/cybersecurity/what-is-cyber-security/",

    content: `Cybersecurity is the practice of protecting systems, networks, and data from digital attacks.

In today’s connected world, cybersecurity secures information and promotes safe digital transformation.

Cybersecurity helps prevent data breaches, ransomware attacks, phishing scams, and identity theft while ensuring safe internet usage.`
  },

  {
    id: 8,

    title: "7 Well-Paying Tech Jobs That Do not Require Coding",

    img: cs2,

    domain: "CyberSecurity",

    url: "https://www.geeksforgeeks.org/blogs/well-paying-tech-jobs-that-dont-require-coding/",

    content: `The technology industry offers many high-paying jobs that do not require programming knowledge.

Careers like UI/UX Design, Technical Writing, Product Management, Digital Marketing, and Cybersecurity Analysis allow professionals to work in tech without extensive coding skills.

These careers continue to grow rapidly with increasing digital transformation.`
  },

  {
    id: 9,

    title: "What Is Hacking?",

    img: cs3,

    domain: "CyberSecurity",

    url: "https://www.geeksforgeeks.org/ethical-hacking/what-is-hacking-definition-types-identification-safety/",

    content: `Hacking refers to identifying and exploiting vulnerabilities in computer systems and networks.

While malicious hacking is illegal, ethical hacking helps improve security by detecting weaknesses before attackers misuse them.

Understanding hacking techniques helps organizations strengthen their digital security systems.`
  },

  // ================= CAREER =================

  {
    id: 10,

    title: "Top 10 IT Career Paths to Explore in 2025",

    img: c1,

    domain: "Career",

    url: "https://www.geeksforgeeks.org/blogs/top-it-career-paths/",

    content: `The IT industry offers diverse career opportunities in software development, cybersecurity, cloud computing, AI, and data science.

As technology evolves rapidly, companies are searching for skilled professionals who can adapt to modern trends.

Continuous learning and certification programs help professionals stay competitive in the tech industry.`
  },

  {
    id: 11,

    title: "Software Engineers Career Path - Salary and Promotion",

    img: c2,

    domain: "Career",

    url: "https://www.geeksforgeeks.org/blogs/software-engineers-career-path-salary-and-promotion/",

    content: `Software engineering offers strong career growth opportunities with increasing salaries and promotions.

Engineers can progress from junior developer roles to senior engineers, architects, team leads, and engineering managers.

Hands-on projects, technical skills, communication abilities, and leadership qualities play important roles in career advancement.`
  },

  {
    id: 12,

    title: "Top 25 New Technology Trends in 2025",

    img: c3,

    domain: "Career",

    url: "https://www.geeksforgeeks.org/top-technology-trends/",

    content: `Modern technologies like Artificial Intelligence, Cloud Computing, Blockchain, Data Science, and Cybersecurity are transforming industries worldwide.

Learning trending technologies improves job opportunities and helps professionals remain competitive in the software industry.

Continuous upskilling is essential for long-term success in modern technology careers.`
  }

];

export default blogs;