import React from "react"
import { Link } from "gatsby"
import Nav from "./Nav"
import Logo from "./Logo"

const Header = () => (
  <header className="container relative z-40 w-full ">
    <div className="container absolute top-0 left-0 w-full p-0 ">
      <div className="flex items-center justify-between w-full px-8 py-8 mb-4 overflow-hidden lg:py-16 lg:px-16 xl:px-24 3xl:px-2">
        <Link className="inline-block" to="/">
          <Logo className="h-40 max-w-[220px] md:max-w-[280px]" />
        </Link>
        <Link to="/wayfinder/">
          Wayfinder
        </Link>
        {/* <Nav /> */}
      </div>
    </div>
  </header>
)

export default Header
