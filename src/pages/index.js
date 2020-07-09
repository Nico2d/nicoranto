import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Header from "../components/header"
import Layout from "../layout/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Hero />


    More content
  </Layout>
)

export default IndexPage
