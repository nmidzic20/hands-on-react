import React from 'react'
import PropTypes from 'prop-types'
import { 
    SearchBar as SearchBarWrapper,
    SearchBarInput 
} from './SearchBar';

const SearchBar = ({ placeholder, disabled, onValueChange }) => {

    return (
        <SearchBarWrapper>
            <SearchBarInput 
                type='text' 
                disabled={disabled}
                placeholder={placeholder}
                onChange={onValueChange}
            />
        </SearchBarWrapper>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onValueChange: PropTypes.func,
}

export default SearchBar;