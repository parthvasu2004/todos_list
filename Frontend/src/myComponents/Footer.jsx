import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2026 MyTodos App. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;