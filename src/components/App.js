import React from "react";
import classNames from "classnames";

import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";

import { search } from "../services/youtube";

class App extends React.Component {
  state = { results: [], selected: null };

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = async (value = "") => {
    const results = await search({ q: value });
    this.setState({ results, selected: null });
  };

  handleSelect = (selected) => {
    this.setState({ selected });
  };

  render() {
    const videoDetailClass = classNames(
      {
        eleven: this.state.selected,
      },
      "wide",
      "column"
    );

    const videoListClass = classNames(
      {
        five: this.state.selected,
        sixteen: !this.state.selected,
      },
      "wide",
      "column"
    );

    return (
      <div className="ui container">
        <SearchBar onSearch={this.handleSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className={videoDetailClass}>
              <VideoDetail video={this.state.selected} />
            </div>
            <div className={videoListClass}>
              <div>Total Results: {this.state.results.length}</div>
              <VideoList
                videos={this.state.results}
                onSelect={this.handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
