import * as React from "react"
import { Link } from "gatsby"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
      num: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };


  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      > 
        <div className="HeaderGroup">
          <a href="/"># TODO</a>
          <a href="/#about">Summary</a>
          <Link to="/analysis">Project</Link>
          <a href="#conclusion">Conclusion</a>
        </div>
      </div>
    );
  }
}

export default Header;
