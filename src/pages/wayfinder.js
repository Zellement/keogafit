import React from "react"
import { Link } from "gatsby"

export default function Wayfinder() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-grenadier-500 to-grenadier-700">
      <nav>
        <ul>
          <li>
            <Link
              className=""
              activeClassName="is-active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className=""
              activeClassName="is-active"
              to="/what-is-keogafit/"
            >
              What is Keogafit?
            </Link>
          </li>
          <li>
            <Link
              className=""
              activeClassName="is-active"
              to="/classes/"
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              className=""
              activeClassName="is-active"
              to="/about-us/"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className=""
              activeClassName="is-active"
              to="/testimonials/"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className=""
              activeClassName="is-active"
              to="/contact-us/"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
