
const AboutMe = () => {
    return (
        <section className='py-4 md:py-10' id="about-me">
            <div className='w-11/12 md:w-10/12 max-w-7xl mx-auto'>
                <div className="text-center space-y-2 lg:max-w-1/2 mx-auto">
                    <h1 className='text-3xl text-primary font-bold'>About Me</h1>
                    {/* <p className="text-[#d5d5d5] ">An insight into my background, the passions that fuel my work, and the experiences that shape how I approach technology and life.</p> */}
                </div>

                <div className="flex flex-col xl:flex-row items-center gap-8 mt-8 lg:mt-12">
                    <div className='space-y-3 text-sm md:text-base leading-relaxed text-[#d5d5d5] flex-1'>
                        <p>
                            Hi, I'm <span className="font-bold">Abu Sufian Mahin</span>, a Computer Science undergraduate at <span className="font-bold">BRAC University</span> with a passion for learning and creating. I learned Python as part of my studies here, completing projects like a fraud detection machine learning model. I've also developed web applications using React and worked with both SQL and NoSQL databases.
                        </p>
                        <p>
                            I especially enjoy working on projects that challenge me to think critically and creatively — whether it's building responsive web applications, optimizing backend processes, or exploring new technologies like AI and machine learning. Solving problems and continuously improving my skills motivates me every day.
                        </p>
                        <p>
                            Outside of programming, I'm a former professional Rainbow Six Siege player, which taught me the importance of strategy, teamwork, and staying calm under pressure. I also enjoy gaming, listening to music, and keeping up with the latest tech trends.
                        </p>
                        <p>
                            I'm always excited to take on new challenges where I can contribute, learn, and grow alongside others.
                        </p>

                    </div>
                    <div className="w-full flex flex-col justify-center space-y-8 text-[#d5d5d5] bg-gray-800 rounded-xl p-6 shadow-lg flex-1">
                        <h3 className="text-2xl font-semibold mb-4 text-primary">Fun Facts</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Former professional Rainbow Six Siege player 🎮</li>
                            <li>Passionate about music as a source of focus and creativity 🎧</li>
                            <li>Continuously exploring AI and emerging technologies 🤖</li>
                            <li>Most productive during quiet late-night hours 🌙</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mt-6 mb-4 text-primary">Hobbies & Interests</h3>
                        <div className="flex flex-wrap gap-4 text-lg">
                            <span>🎮 Gaming</span>
                            <span>🎵 Music</span>
                            <span>📚 Reading</span>
                            <span>⚽ Sports</span>
                        </div>

                        <h3 className="text-2xl font-semibold mt-6 mb-4 text-primary">Favorite Quote</h3>
                        <blockquote className="italic border-l-4 border-primary pl-4 text-gray-300">
                            "Code is like humor. When you have to explain it, it's bad." - Cory House
                        </blockquote>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;