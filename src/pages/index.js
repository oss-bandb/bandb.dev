import React from "react"
import { Layout, Home, About, Services, Community, Contact } from "@components"

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Community />
      <Contact />
    </Layout>
  )
}

export default IndexPage
