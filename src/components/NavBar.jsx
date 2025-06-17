import { useState } from "react";
import {cn} from "@/lib/utils";

export const NavBar = () => {
  const navItems = [
    {id:1, name: "Login", href:"#login"},
    {id:2, name: "Sign Up", href: "#signup"},
  ];

  const [isScrolled, setIscrolled] = useState(false);

  return(
    <nav className="bg-indigo-500 fixed w-full ">
      <div className={cn("flex justify-end gap-4 px-4 py-6 m:py-8")}>
        {navItems.map((item) => 
          <a key={item.id} href={item.href}>{item.name}</a>
        )}
      </div>
    </nav>
  );
};