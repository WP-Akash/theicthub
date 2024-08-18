import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import About from '../Components/About'
import Main_team from '../Components/Home/Team/Main_team'
import VideoSection from '../Components/Home/VideoSection'
import ClientsSection from '../Components/Home/ClientsSection'
import TestimonialSection from '../Components/Home/TestimonialSection'
import Layout from '@/Components/Layout/Layout'

function page() {
  return (
    <>
    <Layout>
    <Breadcrumb page_title="About us" />
      <About/>
      {/* Team Section */}
      <VideoSection/>
      <TestimonialSection/>
      <ClientsSection/>
      <Main_team  />
      {/* End Team Section */}
      </Layout>
      
    </>
  )
}

export default page
