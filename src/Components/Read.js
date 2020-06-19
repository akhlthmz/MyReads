import React, { Component } from "react";
import PropTypes from "prop-types";
import { update } from "../BooksAPI";

class Read extends Component {
  state = {
    selectedValue: "",
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
        <h1>Read</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title}

              <select
                value={book.shelf}
                onChange={(e) => this.onchange(e, book)}
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
Read.propTypes = {
  books: PropTypes.array.isRequired,
};
export default Read;
