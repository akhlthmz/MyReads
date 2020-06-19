import React, { Component } from "react";
import PropTypes from "prop-types";
import { update } from "../BooksAPI";

class WTRead extends Component {
  state = {
    selectedValue: "Move To",
  };
  onchange = (e, book) => {
    this.setState({
      selectedValue: e.target.value,
    });
    update(book, e.target.value);
  };

  render() {
    const { books } = this.props;

    return (
      <div>
        <h1>Want To Read</h1>
        <ul>
          {books
            .filter((book) => book.shelf === "wantToRead")
            .map((filteredBook) => (
              <li key={filteredBook.id}>
                {filteredBook.title}

                <select
                  value={filteredBook.shelf}
                  onChange={(e) => this.onchange(e, filteredBook)}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
WTRead.propTypes = {
  books: PropTypes.array.isRequired,
};
export default WTRead;
