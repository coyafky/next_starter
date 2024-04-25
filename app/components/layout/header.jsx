import React from "react";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import BlogButton from "../ui/ContactButton";
const Header = () => {
    return (

        <header className="bg-gray-100 p-4">
         <nav className="container">
          <ul className="flex gap-5"> 
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>

            <BlogButton>

            </BlogButton>
          </ul>
         </nav>
         
        </header>
    )
}

export default Header