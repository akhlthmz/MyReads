import React, { Component } from "react";
import { search } from "../BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    query: "",
    searchResult: [],
  };
  onchange = (value) => {
    this.setState({
      query: value.trim(),
    });
    search(this.state.query).then((res) =>
      this.setState({
        searchResult: res,
      })
    );
  };
  render() {
    console.log(this.state.searchResult);
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
        {Array.isArray(this.state.searchResult) ? (
          <ul className="books-grid">
            {this.state.searchResult.map((book) => (
              <Book book={book} key={book.id} toUpdate={this.props.toUpdate} />
            ))}
          </ul>
        ) : (
          <h3>Not Matching</h3>
        )}
      </div>
    );
  }
}
export default Search;
