import React from 'react'

const SearchBar = (props) => {

    //props.onValueChange("html");

    return (
        <div>
            <p>Search: </p>
            <input 
                type='text' 
                onChange={props.onValueChange}
            ></input>
        </div>
    )
}

export default SearchBar;