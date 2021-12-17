import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "./Nav"
import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <header className="py-8 md:py-16 z-40">
    <div className="container">
      <div className="flex items-center justify-between w-full mb-4">
        <Link className="inline-block" to="/">
          <Logo className="h-40 max-w-[220px] md:max-w-[280px]" />
        </Link>
        <Nav />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
