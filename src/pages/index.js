import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Boat from "../images/boat.svg"
import Background from "../images/bg.svg"
import Header from "../components/header"

const IndexPage = () => (
  <div className="Main">
    <Header />
    <SEO title="Titanic" />

    <div className="MainBg">
      <img src={Boat} alt="Titanic-Img" />
    </div>
    
    
    
    <p>
      <Link to="/analysis/">Go to Analysis</Link>
    </p>

    <div className="aboutUs" id="about">
      <p>Blah</p>
    </div>
    <div className="conclusion" id="conclusion">
      <p>Blah</p>
    </div>
  </div>
)

export default IndexPage
