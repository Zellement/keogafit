import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer className="overflow-hidden text-sm text-white bg-gradient-to-b from-grenadier-700 to-grenadier-800">
    <div className="container px-8 py-8 lg:py-16 lg:px-16 xl:px-24 3xl:px-8 ">
    <nav
      >
        <ul className={"flex flex-row gap-4 flex-wrap"}>
          <li>
            <Link
              className="transition duration-1000 hover:text-grenadier-200 focus:text-grenadier-200"
              activeClassName="is-active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-1000 hover:text-grenadier-200 focus:text-grenadier-200"
              activeClassName="is-active"
              to="/what-is-keogafit/"
            >
              What is Keogafit?
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-1000 hover:text-grenadier-200 focus:text-grenadier-200"
              activeClassName="is-active"
              to="/classes/"
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-1000 hover:text-grenadier-200 focus:text-grenadier-200"
              activeClassName="is-active"
              to="/about-us/"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-1000 hover:text-grenadier-200 focus:text-grenadier-200"
              activeClassName="is-active"
              to="/testimonials/"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-1000 hover:text-grenadier-200 focus:text-grenadier-200"
              activeClassName="is-active"
              to="/contact-us/"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

        <a
          href="https://www.zellement.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-16 transition opacity-20 hover:opacity-100 duration-900"
        >
          Web Design by Zellement
        </a>
      </div>
    </footer>
  )
}
