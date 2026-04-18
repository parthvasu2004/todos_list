import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = { searchInput: "" };

  onChangeInput = (e) => {
    const value = e.target.value;
    this.setState({ searchInput: value });
    if (this.props.onSearch) {
      this.props.onSearch(value);
    }
  };

  render() {
    return (
      <nav className="header-nav navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand header-brand" to="/">
            {this.props.title}
          </Link>

          <button
            className="navbar-toggler header-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon header-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link header-link" to="/history">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>

            {this.props.searchBar ? (
              <form
                className="d-flex"
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Search todos..."
                  value={this.state.searchInput}
                  onChange={this.onChangeInput}
                  className="header-search-input"
                />
                <button type="submit" className="header-search-btn">
                  Search
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  title: "Todos",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
  onSearch: PropTypes.func,
};

export default Header;