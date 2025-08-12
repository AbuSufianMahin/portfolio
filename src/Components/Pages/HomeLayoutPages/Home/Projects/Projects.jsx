
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../../ui/tooltip"
import { Button } from "../../../../ui/button"
import { NavLink } from "react-router"

import projectsData from "../../../../../../Data/projectData";

const Projects = () => {

    return (
        <section className="py-4 md:py-10" id="projects">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto">
                <h1 className="text-3xl text-primary font-bold text-center mb-8">Projects</h1>

                <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
                    {projectsData.map(({ id, name, image, description, techList }) => (
                        <div
                            key={id}
                            className="flex flex-col gap-4 border border-gray-700 bg-secondary rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div>
                                <img
                                    src={image}
                                    alt={`${name} Header`}
                                    className="w-full md:h-42 lg:h-72"
                                />
                            </div>


                            <div className="px-6 pb-4 flex flex-col justify-between h-full gap-4">
                                <div className="justify-center">
                                    <NavLink to={`/project-details/${name}`}>
                                        <h2 className="text-2xl font-semibold text-primary mb-2 md:mb-3  hover:scale-102 transition duration-300 w-fit">{name.replace("-", " ")}</h2>
                                    </NavLink>

                                    <p className="text-[#d5d5d5] text-xs lg:text-sm">{description}</p>
                                </div>

                                {/* Right: Tech icons */}
                                <div className="flex flex-col md:flex-row lg:items-center justify-between">
                                    <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                                        {techList.map(({ name, icon }, indx) => (
                                            <Tooltip key={indx}>
                                                <TooltipTrigger>
                                                    <div
                                                        className="flex flex-col items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-800 text-white shadow-md"
                                                    >
                                                        <img src={icon} alt={`${name} logo`} className="w-5 h-5 lg:w-6 lg:h-6 mb-1" />
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent side="bottom">
                                                    <p>{name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        ))}
                                    </div>
                                    <div>
                                        <NavLink to={`/project-details/${name}`}>
                                            <Button variant={"ghost"} className="p-0 rounded-4xl hover:bg-transparent hover:text-primary cursor-pointer transition duration-300">View Details</Button>
                                        </NavLink>
                                    </div>
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