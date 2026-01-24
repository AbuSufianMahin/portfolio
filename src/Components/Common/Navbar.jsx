import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";

import { Menu } from "lucide-react";
import ResumeButton from "./ResumeButton";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Me", href: "/#about-me" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];
  const drawerCloseRef = useRef(false);
  const [shouldCloseDrawer, setShouldCloseDrawer] = useState(false);

  useEffect(() => {
    if (shouldCloseDrawer) {
      drawerCloseRef.current.click();
      setShouldCloseDrawer(false);
    }
  }, [shouldCloseDrawer]);

  return (
    <nav className="sticky top-0 z-50 border-b-3 border-primary bg-background">
      <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex justify-between py-4">
        {/* logo */}
        <div className="text-3xl font-extrabold text-primary select-none cursor-default">
          Sufian<span className="text-[#d5d5d5]">Dev</span>
        </div>
        <div className="flex items-center">
          {/* main navbar */}

          <div className="lg:gap-6 xl:gap-10 items-center text-[#d5d5d5] hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex lg:gap-4">
                {/* navigation bar for large devices*/}

                {navLinks.map((navItem) => (
                  <NavLink
                    key={navItem.name}
                    to={navItem.href}
                    // Added 'hover:[&>span]:scale-x-100' which targets ONLY the direct child span
                    className="relative px-4 py-1.5 font-bold hover:text-primary transition duration-300 hover:[&>span]:scale-x-100"
                  >
                    {navItem.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-center scale-x-0 transition-transform duration-300" />
                  </NavLink>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <ResumeButton />
          </div>

          {/* mobile device drawer */}
          <div className="flex lg:hidden">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  size={"sm"}
                  className="border-primary border-2 text-primary"
                >
                  <Menu />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="border-gray-700 px-4 pt-6">
                <div className="mx-auto">
                  <ResumeButton />
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold">Navigation</h3>
                  <div className="flex flex-col gap-2 mt-3">
                    {navLinks.map((navItem) => (
                      <NavLink
                        onClick={() => setShouldCloseDrawer(true)}
                        key={navItem.name}
                        to={navItem.href}
                        className="p-1.5 border border-gray-500 rounded-xl text-center hover:bg-primary transition duration-300"
                      >
                        {navItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </DrawerContent>
              <DrawerClose asChild>
                <Button ref={drawerCloseRef} className="hidden" />
              </DrawerClose>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
