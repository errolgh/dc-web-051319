import React from "react";
import {connect} from 'react-redux'
import {changeSearch} from '../redux/actions'

const Searchbar = props => {
  return (
    <div className="ui container">
      <div className="ui very large fluid input">
        <input
          type="text"
          placeholder="Search"
          value={props.searchEntry}
          onChange={props.onSearching}
        />
      </div>
      <div className="ui clearing section divider" />
    </div>
  );
}

let mapStateToProps = (store) => ({searchEntry : store.searchText})

//return an object that maps a dispatchingAction to a prop
// let mapDispatchToProps = (dispatch) => {
//   return {
//     onSearching: (e)=>{ dispatch( changeSearch(e) ) }
//   }
// }

export default connect(mapStateToProps, {onSearching: changeSearch})(Searchbar);
//          onChange={e => props.onChange(e.target.value)}
