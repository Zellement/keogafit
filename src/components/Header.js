import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "./Nav"
import Logo from "./Logo"

const Header = () => (
  <header className="z-40 w-full py-8 overflow-hidden md:py-16">
    <div className="container overflow-hidden">
      <div className="flex items-center justify-between w-full mb-4 overflow-hidden">
        <Link className="inline-block" to="/">
          <Logo className="h-40 max-w-[220px] md:max-w-[280px]" />
        </Link>
        <Nav />
      </div>
    </div>
  </header>
)

export default Header
