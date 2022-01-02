import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import { BiMenuAltRight } from "react-icons/bi"

const Header = () => (
  <header className="container relative z-40 w-full ">
    <div className="container absolute top-0 left-0 w-full p-0 ">
      <div className="flex items-center justify-between w-full px-8 py-8 mb-4 overflow-hidden lg:py-16 lg:px-16 xl:px-24 3xl:px-2">
        <Link className="inline-block" to="/">
          <Logo className="h-40 max-w-[220px] md:max-w-[280px]" />
        </Link>
        <Link className="flex items-center gap-2 px-3 py-2 text-xs text-white uppercase transition border-2 border-white rounded-lg duration-800 hover:bg-white focus:text-grenadier-500 focus:bg-white hover:text-grenadier-500" to="/wayfinder/">
          Menu <BiMenuAltRight />
        </Link>
        {/* <Nav /> */}
      </div>
    </div>
  </header>
)

export default Header
