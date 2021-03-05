import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AnalysisPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Analysis page</h1>
    <p>Data Analysis Goes Here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AnalysisPage
