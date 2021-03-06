import React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

import Header from "./Header"

const duration = 0.4

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = ({ children, location }) => {
  return (
    <AnimatePresence>
      <motion.main
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Header />
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
