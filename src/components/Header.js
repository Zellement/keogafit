import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Nav from './Nav'
import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <header className="py-8 md:py-16">
    
    <div className="container">
      <div className="flex flex-wrap items-center mb-4">

        <Link className="block inline-block text-lg font-bold md:text-xl" to="/">
          <Logo className="h-20" />
        </Link>
      </div>

      <Nav />

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
