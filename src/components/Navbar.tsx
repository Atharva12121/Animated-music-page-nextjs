'use client'; // use to only dom side rendering we can not use react hook direct in nextjs 

import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

import Link from "next/link";
import { cn } from "../lib/utils";


 function Navbar({ className }: { className?: string })
{
    const [active, setActive] = useState<string | null>(null);
    return(
        <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
               
                </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/commingSoon">Basic Music Theory</HoveredLink>
            <HoveredLink href="/commingSoon">Advanced Composition</HoveredLink>
            <HoveredLink href="/commingSoon">Songwriting</HoveredLink>
            <HoveredLink href="/commingSoon">Music Production</HoveredLink>
          </div>
                </MenuItem>
                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
            
                </MenuItem>
                
                </Link>
               
            </Menu>
        </div>
    );
} 
export default Navbar