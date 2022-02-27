/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
export default Layout
