import React, { useState, useEffect } from 'react'
import Section from '../../components/Section/Section'
import Course from '../../components/Course/Course'
import { Grid } from "../../utils/styles/generalStyles"
import coursesMock from "../../utils/mock/courses"
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import Loader from '../../components/Loader/Loader.jsx'

const Courses = () => {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock)
    }, 1000);
  }, []);

  let handleSearch = (e) => { 
    let searchInput = e.target.value.toLowerCase();

    let matchingCourses = 
      coursesMock.filter((course) => 
        course.title
          .toLowerCase()
          .includes(
            searchInput
          ));

    setCourses(matchingCourses);
  };

  return (
    <Section
      title="Browse our all courses"
      subtitle="We recommend that you choose one of the featured courses. If you
        don't find anything for you here, search for courses in detail on
        the courses page."
    >
      <SearchBar 
        placeholder="Search..." 
        disabled={!courses}
        onValueChange={handleSearch}
      />
      { courses ? 
      <Grid>
        {courses.map((course) => 
          <Course
            key = {course.id}
            id = {course.id}
            imgSrc = {course.imgSrc}
            imgAlt = {course.imgAlt}
            title = {course.title}
            subtitle = {course.subtitle}
            time = {course.time}
          />
        )}
      </Grid> : <Loader/>
      }
    </Section>
  )
}

export default Courses