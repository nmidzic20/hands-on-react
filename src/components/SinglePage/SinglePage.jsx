import React from 'react'
import './SinglePage.scss'
import PropTypes from 'prop-types'

const SinglePage = ({ imgSrc, imgAlt, content }) => {
  return (
    <>
       <article className="SinglePage">
            <figure className="SinglePage-Figure">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="SinglePage-Img"
                />
            </figure>
            <p className="SinglePage-Content">
                {content}
            </p>
        </article> 
    </>
  )
}

SinglePage.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    content: PropTypes.string,
}

export default SinglePage