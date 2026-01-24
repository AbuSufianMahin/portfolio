import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t-3 border-primary">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between py-6">

                <div className="flex-1 text-xl font-extrabold">
                    Abu Sufian Mahin
                </div>
                <div className="flex-2 flex gap-4 flex-col-reverse lg:flex-row justify-between items-center text-gray-400">
                    <div className="text-center">
                        <p className="text-sm">© 2025. Abu Sufian Mahin. All rights reserved.</p>
                    </div>
                    <SocialIcons/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;