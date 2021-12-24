import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "./Nav"
import Logo from "./Logo"

const Header = () => (
  <header className="z-40 w-full overflow-hidden">
    <div className="container p-0 overflow-hidden4">
      <div className="flex items-center justify-between w-full px-8 py-8 mb-4 overflow-hidden lg:py-16 lg:px-16 xl:px-24 3xl:px-2">
        <Link className="inline-block" to="/">
          <Logo className="h-40 max-w-[220px] md:max-w-[280px]" />
        </Link>
        <Nav />
      </div>
    </div>
  </header>
)

export default Header
