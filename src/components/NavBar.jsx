import { useEffect, useState } from "react";
import {cn} from "../lib/utils";

export const NavBar = () => {
  const navItems = [
    {id:1, name: "Login", href:"/login"},
    {id:2, name: "SignUp", href: "/signup"},
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const scrolled = () => {
      setIsScrolled(scrollY > 100)
    };

    window.addEventListener("scroll", scrolled);

    return () => window.removeEventListener("scroll", scrolled);
  }, [])

  return(
    <nav className={cn("fixed flex justify-between w-full gap-4 px-4 py-6 m:py-8 bg-indigo-500/80", isScrolled ? "bg-fuchsia-500/30 backdrop-blur-md px-4 py-6 m:py-8" : "px-4 py-6 m:py-8")}>
      <div className="text-xl text-white text-center font-bold px-2 py-2 m:py-3">
        <h2>EleganZ</h2>
      </div>
      <div className="flex gap-4 items-center justify-end ">
        {navItems.map((item) => 
          <a className="hover:bg-white text-white hover:text-indigo-500 text-sm font-bold rounded-md px-2 md:px-3 py-2 md:py-3" key={item.id} href={item.href}>{item.name}</a>
        )}
      </div>
    </nav>
  );
};