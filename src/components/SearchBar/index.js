import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <form
            className="ui form"
            onSubmit={event => this.onFormSubmit(event)}
          >
            <div className="field">
              <label>Image Search</label>
              <input
                type="text"
                placeholder="Search image..."
                onChange={e => this.setState({ term: e.target.value })}
                value={this.state.term}
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
