import classNames from "classnames";
import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchText: "", loading: false };

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  handleSearch = async () => {
    this.setState({ loading: true });
    await this.props.onSearch(this.state.searchText);
    this.setState({ loading: false });
  };

  render() {
    const searchClasses = classNames("ui", "search", "large", {
      loading: this.state.loading,
    });

    const onKeyDown = (e) => {
      if (e.keyCode === 13) this.handleSearch();
    };

    return (
      <div className="ui container" style={{ padding: "16px 0px" }}>
        <div className={searchClasses}>
          <div className="ui icon input">
            <input
              style={{ width: "1000px" }}
              type="text"
              onKeyDown={onKeyDown}
              placeholder="Search..."
              value={this.state.searchText}
              onChange={this.handleChange}
            />
            <i
              class="inverted circular search link icon"
              onClick={this.handleSearch}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
