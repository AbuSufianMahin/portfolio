import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";
import { Button } from '../ui/button';
import { Link, NavLink } from 'react-router';
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";

import { Download, Menu } from "lucide-react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "About Me", href: "/#about-me" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b-3 border-primary bg-background">
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
                                        className="px-4 py-1.5 rounded-full font-bold hover:text-primary transition duration-300"

                                    >
                                        {navItem.name}
                                    </NavLink>
                                ))}

                            </NavigationMenuList>
                        </NavigationMenu>

                        <ResumeButton/>
                    </div>

                    {/* mobile device drawer */}
                    <div className='flex lg:hidden'>
                        <Drawer direction="right">
                            <DrawerTrigger asChild>
                                <Button variant="outline" size={"sm"} className="border-primary border-2 text-primary"><Menu /></Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <ResumeButton/>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;