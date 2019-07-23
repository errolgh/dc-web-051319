import React from 'react';
// import { prependOnceListener } from 'cluster';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortState === "Alphabetically" ? true : false } onChange={(event) => props.sortBy(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortState === "Price" ? true : false } onChange={(event) => props.sortBy(event)}/>
        Price
      </label>
      <label>
        <input type="radio" value="none" checked={props.sortState === "none" ? true : false } onChange={(event) => props.sortBy(event)}/>
        None
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.selectChange(event)}>
          <option value="none">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
