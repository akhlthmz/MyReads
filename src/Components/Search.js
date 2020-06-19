import React, { Component } from "react";

class Search extends Component {
  state = {
    query: "",
  };
  onchange = (value) => {
    this.setState({
      query: value.trim(),
    });
  };
  render() {
    return (
      <div>
        <h3>Add a book</h3>
        <div>
          <input
            type="text"
            placeholder="Search books here"
            value={this.state.query}
            onChange={(e) => this.onchange(e.target.value)}
          />
        </div>
        {JSON.stringify(this.state.query)}
      </div>
    );
  }
}
export default Search;
