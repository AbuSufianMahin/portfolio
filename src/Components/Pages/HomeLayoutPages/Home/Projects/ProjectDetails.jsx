import { useParams } from 'react-router';
import projectsData from '../../../../../../Data/projectData';
import { ExternalLink, Github } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "../../../../ui/tooltip"

const ProjectDetails = () => {
    const { projectName } = useParams();
    const projectInfo = projectsData.find(project => projectName === project.name);

    return (
        <section className="w-full min-h-screen bg-background py-10">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto bg-secondary p-4 md:p-6 lg:p-10 rounded-2xl border-2 border-gray-700">
                <div className="w-full rounded-lg overflow-hidden shadow-lg mb-4 md:mb-8">
                    <img
                        src={projectInfo.image}
                        alt={projectInfo.name}
                        className="w-full object-cover"
                    />
                </div>

                <h1 className="text-2xl md:text-4xl font-extrabold text-primary mb-2 md:mb-4">{projectInfo.name.replace("-", " ")}</h1>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-2 md:mb-6">
                    {projectInfo.description}
                </p>


                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6">
                    {projectInfo.techList.map(({ name, icon }, indx) => (
                        <Tooltip key={indx}>
                            <TooltipTrigger>
                                <div className="flex flex-col items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-gray-800 text-white shadow-md">
                                    <img src={icon} alt={`${name} logo`} className="w-6 h-6 md:w-8 md:h-8 mb-1" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>


                <div className="flex gap-2 md:gap-4 mb-10">
                    <a
                        href={projectInfo.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border  border-gray-700 flex  items-center text-xs md:text-base gap-1 md:gap-2 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        <Github size={18} />
                        Repository
                    </a>
                    <a
                        href={projectInfo.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border  border-gray-700 flex items-center text-xs md:text-base gap-1 md:gap-2 bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/90 transition"
                    >
                        <ExternalLink size={18} />
                        Live Project
                    </a>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3">Challenges Faced</h2>
                        <ul className="text-sm md:text-base list-disc list-inside text-muted-foreground space-y-2">
                            {projectInfo.challenges.map((challenge, idx) => (
                                <li key={idx}>{challenge}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3">Future Improvements</h2>
                        <ul className="text-sm md:text-base list-disc list-inside text-muted-foreground space-y-2">
                            {projectInfo.improvements.map((improvement, idx) => (
                                <li key={idx}>{improvement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;