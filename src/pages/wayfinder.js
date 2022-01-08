import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import { navigate } from "gatsby"
import { BiArrowToLeft } from "react-icons/bi"

export default function Wayfinder() {
  return (
    <>
      <Seo title="Menu" />
      <div className="fixed inset-0 z-40 w-full text-3xl text-white h-scree 2xl:text-6xl bg-gradient-to-r from-grenadier-500 to-grenadier-700">
        <div
        role="button"
        tabIndex={0}
          className="absolute top-0 left-0 z-50 inline-flex items-center w-auto gap-2 p-2 px-3 py-2 mt-8 ml-8 text-xs text-white uppercase transition duration-700 border-2 border-white rounded-lg cursor-pointer hover:bg-white focus:text-grenadier-500 focus:bg-white hover:text-grenadier-500"
          onClick={() => navigate(-1)} onKeyDown={() => navigate(-1)}
        >
          <BiArrowToLeft /> Go Back
        </div>
        <nav className="pt-32 mx-auto font-semibold wayfinder">
          <ul className="flex flex-col">
            <li>
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="" to="/what-is-keogafit/">
                What is Keogafit?
              </Link>
            </li>
            <li>
              <Link className="" to="/classes/">
                Classes
              </Link>
            </li>
            <li>
              <Link className="" to="/about-us/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="" to="/testimonials/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="" to="/contact-us/">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
