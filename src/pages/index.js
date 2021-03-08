import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import Boat from "../images/boat.svg"
import Background from "../images/bg.svg"
import Header from "../components/header"
import graph1 from "../../data_analysis/Age_and_Fare_plot.png"
import Iceburg from "../images/ice.svg"
import Sea from "../images/sea.svg"

const IndexPage = () => (
  <div className="Main">
    <Header />
    <SEO title="Titanic" />

    <div className="MainBg">
      {/* <img src={Boat} alt="Titanic-Img" /> */}
    </div>
    
    <div className="Main2">
      <div className="content1" id="conclusion">
        <img src={graph1}/>
        <div className="TextGroup">
          <h1>Titanic Data</h1>
          <p>In this project, we analized the data from the Titanic passengers. This graph compares the passenger age to the fair each passenger paid.</p>
          <Link className="linkTo" to="/analysis">Learn More!</Link>
        </div>
      </div>

      <div className="aboutUs" id="about">
        <div className="TextGroup">
          <h1>Our Team</h1>
          <p>Our team is made up of 2 data science majors and one Math-CS major. We hoped to analyze this data in a meaningful way and display the Titanic information in a way that has never been done before. This project was a lot of fun and it was a wonderful learning experience.</p>
        </div>
        <img src={Iceburg}/>
      </div>
      
      <div className="SeaBg">
        <img className="fuck" src={Sea} />
      </div>

    </div>
  </div>
)

export default IndexPage
