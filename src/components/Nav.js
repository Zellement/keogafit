import React from "react"
import { Link } from "gatsby"
import useToggle from "./UseToggle"
import { RiMenu3Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"

export default function Nav() {
  const [showMenu, showingMenu] = useToggle('hidden')

  return (
    <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col">
      <ul className={(showMenu ? "hidden" : "block") + " absolute inset-0 z-50 w-full h-full bg-white md:block md:relative md:inset-auto md:h-auto"}>
        <li>
          <Link
            className=""
            onClick={showingMenu}
            activeClassName="is-active"
            to="/"
          >
            Home
          </Link>
          <Link
            className=""
            onClick={showingMenu}
            activeClassName="is-active"
            to="/about/"
          >
            About
          </Link>
        </li>
      </ul>
      
      <div
        aria-label="Navigation menu button"
        tabIndex={0}
        role="button"
        className={`bg-black text-white absolute top-0 right-0 z-40 p-2 md:hidden`}
        onClick={showingMenu}
        onKeyDown={showingMenu}
      >
        <RiMenu3Line className="text-2xl" />
      </div>
      
      <div
        aria-label="Navigation close menu"
        tabIndex={0}
        role="button"
        className={(showMenu ? "hidden" : "block") + ` bg-black text-white absolute top-0 right-0 z-50 p-2 md:hidden`}
        onClick={showingMenu}
        onKeyDown={showingMenu}
      >
        <IoMdClose className="text-2xl" />
      </div>

    </nav>
  )
}
