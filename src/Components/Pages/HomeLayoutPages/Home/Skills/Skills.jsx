import skillsData from "../../../../../../Data/skillsData"; 


const Skills = () => {
    return (
        <section id="skills" className="py-4 md:py-10">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto">

                <div className="text-center">
                    {/* skills */}
                    <div className="border border-gray-700 p-4 md:p-6 mt-8 lg:mt-12 bg-secondary rounded-xl shadow-lg">
                        <h1 className="text-3xl text-primary font-bold">Skills</h1>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4 mt-4 md:mt-6">

                            {/* category */}
                            {skillsData.map(({ category, details }) => (
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
