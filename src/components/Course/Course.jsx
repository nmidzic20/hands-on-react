import React from 'react'
import PropTypes from 'prop-types'
import "./Course.scss"
import { Link } from 'react-router-dom'

const Course = ({ id, imgSrc, imgAlt, title, subtitle, time }) => {
  return (
    <article className="Course">
      <Link to={`/courses/${id}`}>
        <figure className="Course-Figure">
          <img
              src={imgSrc}
              alt={imgAlt}
              className="Course-Img"
          />
        </figure>
        <h3 className="Course-Title">{title}</h3>
        <p className="Course-Subtitle">{subtitle}</p>
        <p className="Course-Time">{time}</p>
      </Link>
    </article>
  )
}

Course.propTypes = {
  id: PropTypes.number,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  time: PropTypes.string,
}

export default Course