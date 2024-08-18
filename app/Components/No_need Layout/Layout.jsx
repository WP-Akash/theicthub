import React from 'react'
import Main_header from './Main_header'
import Main_Footer from './Main_Footer'

function Layout({children}) {
  return (
    <>
    <Main_header/>
    <div>{children}</div>
    <Main_Footer/>
    </>
  )
}

export default Layout