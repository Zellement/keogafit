import React from "react"
import { Link } from "gatsby"
import useToggle from "./UseToggle"
import { RiMenu2Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"

export default function Nav() {
  const [showMenu, showingMenu] = useToggle("hidden")

  return (
    <>
      <span
        aria-label="Navigation menu button"
        tabIndex={0}
        role="button"
        className={`inline-flex flex-row items-center text-xs gap-2 z-40 p-2 btn btn--white-outline`}
        onClick={showingMenu}
        onKeyDown={showingMenu}
      >
        <span>Menu</span> <RiMenu2Line className="text-lg" />
      </span>

      <nav
        className={
          (showMenu ? "opacity-0 -translate-x-full pointer-events-none" : "translate-x-0 opacity-100 pointer-events-auto") +
          " bg-gradient-to-b transform from-grenadier-500 to-grenadier-700 h-screen text-white text-4xl gap-8 absolute inset-0 z-40 w-full"
        }
      >
        <ul className={(showMenu ? "translate-x-full opacity-0" : "translate-x-0 opacity-100") + " transition duration-1000 transform flex flex-col p-8 max-w-screen-lg m-auto"}>
          <li>
            <Link
              className=""
              onClick={showingMenu}
              activeClassName="is-active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className=""
              onClick={showingMenu}
              activeClassName="is-active"
              to="/what-is-keogafit/"
            >
              What is Keogafit?
            </Link>
          </li>
          <li>
            <Link
              className=""
              onClick={showingMenu}
              activeClassName="is-active"
              to="/classes/"
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              className=""
              onClick={showingMenu}
              activeClassName="is-active"
              to="/about-us/"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className=""
              onClick={showingMenu}
              activeClassName="is-active"
              to="/testimonials/"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className=""
              onClick={showingMenu}
              activeClassName="is-active"
              to="/contact-us/"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div
          aria-label="Navigation close menu"
          tabIndex={0}
          role="button"
          className={
            (showMenu ? "hidden" : "block") +
            ` bg-black text-white absolute top-0 right-0 z-50 p-2`
          }
          onClick={showingMenu}
          onKeyDown={showingMenu}
        >
          <IoMdClose className="text-2xl" />
        </div>
      </nav>
    </>
  )
}
