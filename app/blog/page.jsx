import React from 'react'
import Blog from '../Components/Blog'
import Breadcrumb from '../Components/Breadcrumb'
import Layout from '@/Components/Layout/Layout'

function page() {
  return (
    <>
    <Layout>
      <Breadcrumb page_title="Blog" />
      <Blog/>
      </Layout>
    </>
  )
}

export default page
