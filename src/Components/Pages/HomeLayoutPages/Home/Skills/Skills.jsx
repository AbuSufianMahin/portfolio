import reactLogo from "../../../../../assets/Icons/react.svg"
import css3Logo from "../../../../../assets/Icons/css3.svg"
import expressLogo from "../../../../../assets/Icons/express.svg"
import githubLogo from "../../../../../assets/Icons/github.svg"
import htmlLogo from "../../../../../assets/Icons/html5.svg"
import javascriptLogo from "../../../../../assets/Icons/javascript.svg"
import mongodbLogo from "../../../../../assets/Icons/mongodb.svg"
import mysqlLogo from "../../../../../assets/Icons/mysql.svg"
import nodejsLogo from "../../../../../assets/Icons/nodejs.svg"
import pythonLogo from "../../../../../assets/Icons/python.svg"
import shadcnuiLogo from "../../../../../assets/Icons/shadcnui.svg"
import tailwindcssLogo from "../../../../../assets/Icons/tailwindcss.svg"
import vercelLogo from "../../../../../assets/Icons/vercel.svg"
import vscodeLogo from "../../../../../assets/Icons/vscode.svg"



const Skills = () => {

    const skills = [
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


    return (
        <section id="skills" className="py-4 md:py-10">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto">

                <div className="text-center">
                    {/* skills */}
                    <div className="border border-gray-700 p-4 md:p-6 mt-8 lg:mt-12 bg-secondary rounded-xl shadow-lg">
                        <h1 className="text-3xl text-primary font-bold">Skills</h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4 mt-4 md:mt-6">

                            {/* category */}
                            {skills.map(({ category, details }) => (
                                <div key={category} className="p-4 bg-gray-800 border border-gray-700 rounded-lg">
                                    <h3 className="text-primary text-xl font-bold text-center">{category}</h3>

                                    <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 md:mt-8">
                                        
                                        {/* individual skill */}
                                        {details.map(({ name, icon }) => (
                                            <div key={name} className="flex flex-col items-center space-y-2">
                                                <img src={icon} alt={name} title={name} className="w-6 h-6xl:w-10 xl:h-10" />
                                                <span className="text-xs xl:text-base">{name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};

export default Skills;
