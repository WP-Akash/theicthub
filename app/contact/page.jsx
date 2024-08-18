import React from 'react'
import Contact from '../Components/Contact'
import Breadcrumb from '../Components/Breadcrumb'
import Layout from '@/Components/Layout/Layout'

function page() {
  return (
    <>
    <Layout>
    <Breadcrumb page_title="Contact Us" />
      <Contact/>
      </Layout>
    </>
  )
}

export default page
