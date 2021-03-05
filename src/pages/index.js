import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Boat from "../images/boat.svg"

const IndexPage = () => (
  <div className="Main">
    <Layout>
        <SEO title="Titanic" />
        <h1>Wassup</h1>
        <img src={Boat} alt="Titanic-Img" />
        <img src={Boat} alt="Titanic-Img" />
        <img src={Boat} alt="Titanic-Img" />
        <img src={Boat} alt="Titanic-Img" />
        <p>
          <Link to="/analysis/">Go to Analysis</Link>
        </p>

        <div className="aboutUs" id="about">
          <p>Blah</p>
        </div>
        <div className="conclusion" id="conclusion">
          <p>Blah</p>
        </div>
    </Layout>
  </div>
)

export default IndexPage
