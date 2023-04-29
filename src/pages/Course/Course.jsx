import React from 'react'
import Section from '../../components/Section/Section'
import SinglePage from '../../components/SinglePage/SinglePage'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import coursesMock from '../../utils/mock/courses'

const Course = () => {
  const {id} = useParams();

  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
      setTimeout(() => {
          setCourses(coursesMock)
      }, 1000);
  }, []);

  useEffect(() => {
    courses && setCourse(courses.find((course) => course.id == id));
  }, [courses]);

  return (
    course &&
    <Section
      title={course.title} 
    >
      <SinglePage
        imgSrc={course.imgSrc}
        imgAlt={course.imgAlt}
        content={course.content}
      />
    </Section>
  )
}

export default Course