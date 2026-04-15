import { Component } from "react";

// 🎨 Inline style objects
const footerStyles = {
  footer: {
    // height: "100px",
    backgroundColor: "rgba(0,0,0,10)",
    color: "white",
    padding: "15px 0",
    textAlign: "center",
    boxShadow: "0 -4px 10px rgba(255,0,0,0.5)",
    // marginTop: "20px"
  },
  text: {
    margin: 0,
    fontSize: "14px",
    color: "orange",
    fontWeight: "500"
  }
};

class Footer extends Component {
  render() {
    return (
      <footer style={footerStyles.footer}>
        <div className="container">
          <p style={footerStyles.text}>© 2026 MyTodos App. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
