import * as React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = () => (
  <header>
    <div className="bar">
      <Link className="menuItem" to="/"><p># TODO</p></Link>
      <Link className="menuItem" to="/#about"><p>Summary</p></Link>
      <Link className="menuItem" to="/analysis"><p>Project</p></Link>
      <Link className="menuItem" to="/#conclusion"><p>Conclusion</p></Link>
    </div>
  </header>
)

export default Header
