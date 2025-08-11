import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { Button } from '../ui/button';
import { NavLink } from 'react-router';
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";

import { Download } from "lucide-react";

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about-me" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="sticky top-0 border-b-3 border-primary bg-background">
            <div className='w-11/12 md:w-10/12 max-w-7xl mx-auto flex justify-between py-4'>
                {/* logo */}
                <div className="text-3xl font-extrabold text-primary select-none cursor-default">
                    Sufian<span className="text-[#d5d5d5]">Dev</span>
                </div>
                <div className='flex items-center'>
                    {/* main navbar */}

                    <div className='lg:gap-6 xl:gap-10 items-center text-[#d5d5d5] hidden lg:flex'>
                        <NavigationMenu>
                            <NavigationMenuList className='flex lg:gap-4'>

                                {/* navigation bar for large devices*/}
                                {navLinks.map((navItem) => (
                                    <NavLink
                                        key={navItem.name}
                                        to={navItem.href}
                                        end={navItem.href === "/"}
                                        className="px-4 py-1.5 rounded-full font-bold hover:text-primary transition duration-300"

                                    >
                                        {navItem.name}
                                    </NavLink>
                                ))}

                            </NavigationMenuList>
                        </NavigationMenu>

                        <a
                            href="/sufian_resume.pdf"
                            download
                        >
                            <Button className="rounded-full border-2 border-primary text-[#d5d5d5] bg-transparent hover:bg-primary"><Download strokeWidth={2}/>Resume</Button>
                        </a>
                    </div>

                    {/* mobile device drawer */}
                    <div className='flex lg:hidden'>
                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <Button variant="outline">Open Drawer</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <a
                                    href="/sufian_resume.pdf"
                                    download
                                >
                                    <Button className="rounded-full border-2 border-primary text-[#d5d5d5] bg-transparent hover:bg-primary"><Download strokeWidth={2}/>Resume</Button>
                                </a>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;