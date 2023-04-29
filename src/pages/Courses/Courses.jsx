import React from 'react'
import Section from '../../components/Section/Section'
import Course from '../../components/Course/Course'
import { Grid } from "../../utils/styles/generalStyles"
import coursesMock from "../../utils/mock/courses"

const Courses = () => {

  let courseItems = coursesMock.map((course) => (
    <Course
      key = {course.id}
      id = {course.id}
      imgSrc = {course.imgSrc}
      imgAlt = {course.imgAlt}
      title = {course.title}
      subtitle = {course.subtitle}
      time = {course.time}
    />
  ));

  return (
    <>
      <Section
        title="Browse our all courses" 
        subtitle="We recommend that you choose one of the featured courses. If you
          don't find anything for you here, search for courses in detail on
          the courses page."
      >
        <Grid>
          {courseItems}
        </Grid>
      </Section>
    </>
  )
}

export default Courses