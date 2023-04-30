import React from 'react'
import PropTypes from 'prop-types'
import { 
    SearchBar as SearchBarWrapper,
    SearchBarInput 
} from './SearchBar';


const SearchBar = ({ placeholder, onValueChange }) => {

    return (
        <SearchBarWrapper>
            <SearchBarInput 
                type='text' 
                placeholder={placeholder}
                onChange={onValueChange}
            />
        </SearchBarWrapper>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onValueChange: PropTypes.func,
}

export default SearchBar;