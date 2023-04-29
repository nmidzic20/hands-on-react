import React, { useState } from 'react'
import Section from '../../components/Section/Section'
import Course from '../../components/Course/Course'
import { Grid } from "../../utils/styles/generalStyles"
import coursesMock from "../../utils/mock/courses"
import SearchBar from '../../components/SearchBar/SearchBar.jsx'

const Courses = () => {

  const [courses, setCourses] = useState(coursesMock);

  let courseItems = courses.map((course) => (
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

  const [searchInput, setSearchInput] = useState('');

  let handleSearch = (e) => { 
    setSearchInput(e.target.value);

    let matchingCourses = 
      coursesMock.filter((course) => 
        course.title
          .toLowerCase()
          .includes(
            searchInput.toLowerCase()
          ));

    setCourses(matchingCourses);
  };

  return (
    <>
      <Section
        title="Browse our all courses"
        subtitle="We recommend that you choose one of the featured courses. If you
          don't find anything for you here, search for courses in detail on
          the courses page."
      >
        <SearchBar onValueChange={handleSearch}></SearchBar>
        {searchInput}
        <Grid>
          {courseItems}
        </Grid>
      </Section>
    </>
  )
}

export default Courses