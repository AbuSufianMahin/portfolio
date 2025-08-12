import Header from "../Home/Header/Header"
import AboutMe from "../Home/AboutMe/AboutMe"
import Skills from "../Home/Skills/Skills"
import Projects from "./Projects/Projects";
const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default HomePage;