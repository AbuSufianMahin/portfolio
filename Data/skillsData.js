import {
  reactLogo,
  css3Logo,
  expressLogo,
  githubLogo,
  htmlLogo,
  javascriptLogo,
  mongodbLogo,
  mysqlLogo,
  nodejsLogo,
  pythonLogo,
  shadcnuiLogo,
  tailwindcssLogo,
  vercelLogo,
  vscodeLogo,
  nextJSLogo
} from "../src/assets/Icons";



const skillsData = [
    {
        category: "Languages",
        details: [
            { name: "Python", icon: pythonLogo },
            { name: "JavaScript", icon: javascriptLogo },
        ],
    },
    {
        category: "Frontend",
        details: [
            { name: "HTML", icon: htmlLogo },
            { name: "CSS3", icon: css3Logo },
            { name: "ReactJS", icon: reactLogo },
            { name: "NextJS", icon:  nextJSLogo},
            { name: "Tailwind CSS", icon: tailwindcssLogo },
            { name: "shadcn", icon: shadcnuiLogo },
        ],
    },
    {
        category: "Backend",
        details: [
            { name: "Node.js", icon: nodejsLogo },
            { name: "Express.js", icon: expressLogo },
            { name: "MongoDB", icon: mongodbLogo },
            { name: "MySQL", icon: mysqlLogo },
        ],
    },
    {
        category: "Tools",
        details: [
            { name: "GitHub", icon: githubLogo },
            { name: "VS Code", icon: vscodeLogo },
            { name: "Vercel", icon: vercelLogo },
        ],
    },
];


export default skillsData;