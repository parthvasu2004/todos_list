import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 🎨 Inline style objects
const headerStyles = {
  nav: {
    backgroundColor: "rgba(0,0,0,10)",
    color: "white",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(255,0,0,0.5)",
    position: "relative"
  },
  brand: {
    color: "orange",
    fontWeight: "bold",
    fontSize: "22px",
    textDecoration: "none"
  },
  navLink: {
    color: "white",
    fontWeight: "500",
    marginRight: "15px",
    textDecoration: "none",
    transition: "color 0.3s ease"
  },
  navLinkHover: {
    color: "orange"
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "1px solid red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px"
  },
  button: {
    marginLeft: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out"
  }
};

class Header extends Component {
  state = {
    searchInput: ""
  };

  onChangeInput = (e) => {
    const value = e.target.value;
    this.setState({ searchInput: value });
    if (this.props.onSearch) {
      this.props.onSearch(value);
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={headerStyles.nav}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={headerStyles.brand}>
            {this.props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/history" style={headerStyles.navLink}>
                  History
                </Link>
              </li>
            </ul>
            {this.props.searchBar ? (
              <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search todos..."
                  value={this.state.searchInput}
                  onChange={this.onChangeInput}
                  style={headerStyles.input}
                />
                <button type="submit" style={headerStyles.button}>
                  Search
                </button>
              </form>
            ) : (
              "No search bar"
            )}
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  title: "Todos",
  searchBar: true
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
  onSearch: PropTypes.func
};

export default Header;
