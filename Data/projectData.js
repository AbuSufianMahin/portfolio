import tasklanceHeaderSS from "../src/assets/Images/TaskLance-header.png"
import dinemanagerHeaderSS from "../src/assets/Images/DineManager-header.png"
import petconnectHeaderSS from "../src/assets/Images/PetConnect-header.png"

import reactLogo from "../src/assets/Icons/react.svg"
import tailwindLogo from "../src/assets/Icons/tailwindcss.svg"
import mongoDBLogo from "../src/assets/Icons/mongodb.svg"
import shadcnLogo from "../src/assets/Icons/shadcnui.svg"


const projectsData = [
    {
        id: 1,
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
    },
    {
        id: 2,
        name: "TaskLance",
        image: tasklanceHeaderSS,
        description:
            "TaskLance is a comprehensive freelance task marketplace that seamlessly connects clients with skilled freelancers. It enables efficient task posting, bidding, and project management, making it easier for users to find quality help or work opportunities.",
        techList: [
            { name: "React", icon: reactLogo },
            { name: "TailwindCSS", icon: tailwindLogo },
            { name: "MongoDB", icon: mongoDBLogo },
        ],
    },
    {
        id: 3,
        name: "Dine Manager",
        image: dinemanagerHeaderSS,
        description:
            "Dine Manager is a restaurant order management system designed to simplify food ordering. Users can browse menu items, place orders smoothly, and keep track of their selections without the complexity of payment or table reservations.",
        techList: [
            { name: "React", icon: reactLogo },
            { name: "TailwindCSS", icon: tailwindLogo },
            { name: "MongoDB", icon: mongoDBLogo },
        ],
    },
    
];


export default projectsData;