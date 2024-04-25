"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, ...rest }) =>{
    const pathname = usePathname()
    const isActive = href.startsWith(pathname);
    console.log(isActive);

    return (
        <Link className={isActive? 'text-cyan-500':''} href={href} {...rest}></Link>
    )
}

export default NavLink