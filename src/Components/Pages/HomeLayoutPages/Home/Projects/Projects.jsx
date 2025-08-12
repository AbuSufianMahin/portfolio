
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../../ui/tooltip"
import { Button } from "../../../../ui/button"
import { NavLink } from "react-router"

import projectsData from "../../../../../../Data/projectData";

const Projects = () => {

    return (
        <section className="py-4 md:py-10" id="projects">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto">
                <h1 className="text-3xl text-primary font-bold text-center mb-8">Projects</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map(({ id, name, image, description, techList }) => (
                        <div
                            key={id}
                            className="grid gap-6 border border-gray-700 bg-secondary rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image spans both columns on small screens */}
                            <div className="md:h-72 overflow-hidden">
                                <img
                                    src={image}
                                    alt={`${name} Header`}
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Left: Name + Description */}
                            <div className="px-6 pb-4 flex flex-col gap-4">
                                <div className="justify-center">
                                    <h2 className="text-2xl font-semibold text-primary mb-4">{name}</h2>
                                    <p className="text-[#d5d5d5] text-xs md:text-sm">{description}</p>
                                </div>

                                {/* Right: Tech icons */}
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {techList.map(({ name, icon }, indx) => (
                                            <Tooltip key={indx}>
                                                <TooltipTrigger>
                                                    <div
                                                        className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white shadow-md"
                                                        title={name}
                                                    >
                                                        <img src={icon} alt={`${name} logo`} className="w-6 h-6 mb-1" />
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent side="bottom">
                                                    <p>{name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        ))}
                                    </div>
                                    <NavLink to="">
                                        <Button size={"sm"} variant={"ghost"} className="hover:bg-transparent hover:text-primary cursor-pointer transition duration-300">View Details</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Projects;