import React, { Component } from "react";
import PropTypes from "prop-types";

class CurrentlyReading extends Component {
  state = {
    selectedValue: "",
  };
  onchange = (e, book) => {
    e.persist();
    this.setState({ selectedValue: e.target.value });
    this.props.toUpdate(book, e.target.value);
  };

  render() {
    const { books } = this.props;

    return (
      <div>
        {JSON.stringify(this.state)}
        <h1>Currently Reading</h1>
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

CurrentlyReading.propTypes = {
  books: PropTypes.array.isRequired,
};

export default CurrentlyReading;
