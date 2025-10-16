import tasklanceHeaderSS from "../src/assets/Images/TaskLance-header.png"
import dinemanagerHeaderSS from "../src/assets/Images/DineManager-header.png"
import petconnectHeaderSS from "../src/assets/Images/PetConnect-header.png"
import quizPilotSS from "../src/assets/Images/QuizPilot-quizpage.png"

import reactLogo from "../src/assets/Icons/react.svg"
import tailwindLogo from "../src/assets/Icons/tailwindcss.svg"
import mongoDBLogo from "../src/assets/Icons/mongodb.svg"
import shadcnLogo from "../src/assets/Icons/shadcnui.svg"
import nextJSLogo from "../src/assets/Icons/nextjs.svg"

// hyphen is needed between the project words for good URL  
const projectsData = [
    {
        id: 1,
        name: "Quiz-Pilot",
        image: quizPilotSS,
        description:
            "QuizPilot is a cutting-edge EdTech platform built with Next.js and NextAuth, designed to make learning programming languages fun, interactive, and accessible for everyone.",
        techList: [
            { name: "NextJS", icon: nextJSLogo },
            { name: "TailwindCSS", icon: tailwindLogo },
            { name: "Shadcn", icon: shadcnLogo },
            { name: "MongoDB", icon: mongoDBLogo },
        ],
        liveLink: "https://quiz-pilot-sbpg.vercel.app",
        githubLink: "https://github.com/AsyncRifat/quiz-pilot",

        challenges: [],
        improvements: [
            "Convert project to TypeScript for better type safety.",
            "Enhance chatbot with context awareness and richer responses.",
            "Add detailed performance analytics and interactive UI features."
        ],
        isTeamProject: true,
        myContribution: [
            "Built an interactive quiz platform with category-wise quizzes and score tracking.",
            "Integrated a Gemini-powered chatbot for user assistance.",
            "Implemented real-time leaderboard analytics to boost engagement.",
        ]

    },
    {
        id: 2,
        name: "PetConnect",
        image: petconnectHeaderSS,
        description:
            "PetConnect is a user-friendly pet adoption platform that connects loving families with pets in need. It offers detailed pet listings, adoption request management, and a seamless way to find your next furry friend.",
        techList: [
            { name: "React", icon: reactLogo },
            { name: "TailwindCSS", icon: tailwindLogo },
            { name: "Shadcn", icon: shadcnLogo },
            { name: "MongoDB", icon: mongoDBLogo },
        ],
        liveLink: "https://petconnect-adoption-platform.web.app",
        githubLink: "https://github.com/AbuSufianMahin/PetConnect-client",
        challenges: [
            "Implementing efficient pet search and filtering functionality.",
            "Managing real-time adoption request updates.",
            "Designing a user-friendly yet information-rich UI.",
        ],
        improvements: [
            "Integrate AI-powered pet matching recommendations.",
            "Add multilingual support for global adoption.",
            "Include video introductions for pets.",
        ],

        isTeamProject: false,
        myContribution: []
    },
    {
        id: 3,
        name: "TaskLance",
        image: tasklanceHeaderSS,
        description:
            "TaskLance is a comprehensive freelance task marketplace that seamlessly connects clients with skilled freelancers. It enables efficient task posting, bidding, and project management, making it easier for users to find quality help or work opportunities.",
        techList: [
            { name: "React", icon: reactLogo },
            { name: "TailwindCSS", icon: tailwindLogo },
            { name: "MongoDB", icon: mongoDBLogo },
        ],
        liveLink: "https://tasklanse-task-marketplace.web.app",
        githubLink: "https://github.com/AbuSufianMahin/TaskLance-client",
        challenges: [
            "Creating a secure bidding system to prevent spam offers.",
            "Ensuring scalable task management with MongoDB.",
            "Handling multiple concurrent project updates in real-time.",
        ],
        improvements: [
            "Integrate payment gateways for full freelancing workflow.",
            "Add skill-based freelancer recommendations.",
            "Implement project milestone tracking.",
        ],

        isTeamProject: false,
        myContribution: []
    },
    {
        id: 4,
        name: "Dine-Manager",
        image: dinemanagerHeaderSS,
        description:
            "Dine Manager is a restaurant order management system designed to simplify food ordering. Users can browse menu items, place orders smoothly, and keep track of their selections without the complexity of payment or table reservations.",
        techList: [
            { name: "React", icon: reactLogo },
            { name: "TailwindCSS", icon: tailwindLogo },
            { name: "MongoDB", icon: mongoDBLogo },
        ],
        liveLink: "https://restaurant-management-sy-6dee9.web.app",
        githubLink: "https://github.com/AbuSufianMahin/Dine-manager-client",
        challenges: [
            "Ensuring responsive design for tablet-based restaurant ordering.",
            "Optimizing menu image loading for fast browsing.",
            "Managing order state without external payment integration.",
        ],
        improvements: [
            "Add full POS system integration for restaurants.",
            "Enable multi-branch order tracking.",
            "Provide detailed analytics for restaurant owners.",
        ],

        isTeamProject: false,
        myContribution: []
    },
];



export default projectsData;