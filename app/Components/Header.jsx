import React from 'react'
import Menu from './Menu'

function Head() {
  return (
    <>
       <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link
        href="/plugins/revolution/css/settings.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/plugins/revolution/css/layers.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/plugins/revolution/css/navigation.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="/css/style.css" rel="stylesheet" />
    
     
      {/* Main Header*/}
      <Menu />
        {/*Main Slider*/}
    </>
  )
}

export default Head
