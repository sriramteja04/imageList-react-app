import React from 'react';

const SearchBar = props => {
  return (
    <div className="ui segment">
      <form onSubmit={props.formSubmit} className="ui form">
        <div className="ui field">
          <label htmlFor=""> Search Image </label>
          <input
            type="text"
            value={props.value}
            placeholder="Search Image"
            onChange={props.searchImage}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
