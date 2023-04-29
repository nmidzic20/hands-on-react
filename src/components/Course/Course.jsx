import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { 
  Course as CourseWrapper, 
  CourseImg,
  CourseFigure,
  CourseTitle,
  CourseSubtitle,
  CourseTime 
} from "./CourseStyle";

const Course = ({ id, imgSrc, imgAlt, title, subtitle, time }) => {
  return (
    <CourseWrapper>
      <Link to={`/courses/${id}`}>
        <CourseFigure>
          <CourseImg 
            src={imgSrc}
            alt={imgAlt}/>
        </CourseFigure>
        <CourseTitle>{title}</CourseTitle>
        <CourseSubtitle>{subtitle}</CourseSubtitle>
        <CourseTime>{time}</CourseTime>
      </Link>
    </CourseWrapper>
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