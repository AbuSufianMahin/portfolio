import sufianPotrait from "../../../../../assets/Images/sufian-potrait.jpg";
import { Button } from "../../../../ui/button";
import { Download } from "lucide-react";
import Typewriter from "typewriter-effect";
import SocialIcons from "../../../../Common/SocialIcons";

const Header = () => {
  const designation = [
    "Python Programmer",
    "Web Developer",
    "AI & ML Explorer",
  ];

  return (
    <section id="home" className="py-12 lg:py-20">
      <div className="w-11/12 md:w-10/12 max-w-6xl mx-auto flex flex-col md:flex-row text-center md:text-left items-center gap-6 lg:gap-10">
        <div className="md:flex-4 lg:flex-2">
          <div className="p-4 md:p-6 rounded-full bg-[#444444] w-64 md:w-80 lg:w-96 aspect-square overflow-hidden">
            <img
              src={sufianPotrait}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="text-[#d5d5d5] text-xl md:flex-5 lg:flex-3 px-4">
          <div className="mb-2">
            <h3>
              <Typewriter
                options={{
                  strings: designation,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 20,
                }}
              />
            </h3>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 lg:mb-6 text-[#f5f5f5]">
            Abu Sufian Mahin
          </h1>
          <p className="text-sm md:text-base">
            Curious and driven CSE undergrad who loves creating clean,
            user-friendly web apps. Comfortable with Python, React, and
            databases, I enjoy turning tricky challenges into smooth, practical
            solutions. Always excited to learn new things and grow along the
            way.
          </p>

          <div className="lg:hidden my-4 flex flex-col md:flex-row items-center gap-2 md:gap-5">
            <h2 className="text-lg">Socials:</h2>
            <SocialIcons iconSize={24} iconGap={4} />
          </div>

          <div className="mt-4 lg:mt-6">
            <a href="/sufian_resume.pdf" download>
              <Button
                className="rounded-full border-2 border-primary text-[#d5d5d5] bg-transparent hover:bg-primary"
                size={"lg"}
              >
                <Download strokeWidth={2} />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
