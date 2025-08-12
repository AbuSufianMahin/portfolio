import { FaFacebookF, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between py-10">

                <div className="flex-1 text-xl font-extrabold">
                    Abu Sufian Mahin
                </div>
                <div className="flex-2 flex gap-4 flex-col-reverse lg:flex-row justify-between items-center text-gray-400">
                    <div className="text-center">
                        <p className="text-sm">© 2025. Abu Sufian Mahin. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://www.facebook.com/abusufian.mahin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://wa.me/+8801629519313"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                        <a
                            href="https://github.com/AbuSufianMahin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abu-sufian-mahin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;