import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
