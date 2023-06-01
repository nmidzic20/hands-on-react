import React, { useState, useEffect } from "react";
import Section from "../../components/Section/Section";
import Course from "../../components/Course/Course";
import { Button, Grid } from "../../utils/styles/generalStyles";
import coursesMock from "../../utils/mock/courses";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import coursesStore from "../../store/CoursesStore";
import { observer } from "mobx-react";
import LectureImg1 from "../../assets/images/lecture-1.jpg";

const Courses = () => {
  const { courses, coursesLength, setCourses, setCourse } = coursesStore;
  useEffect(() => {
    if (coursesLength == 0) {
      setTimeout(() => {
        setCourses(coursesMock);
      }, 1000);
    }
  }, []);

  const handleAddCourse = () => {
    let courseId = coursesLength + 1;

    setCourse({
      id: courseId,
      imgSrc: LectureImg1,
      imgAlt: `New course ${courseId}`,
      title: `${courseId}. New course`,
      subtitle: "Get to know us better...",
      time: "60min",
      content:
        "In this course, you'll get to know the instructor and their teaching style, as well as the objectives and expectations of the course. We'll also cover some basic information about web development and programming.",
    });
  };

  let handleSearch = (e) => {
    let searchInput = e.target.value.toLowerCase();

    let matchingCourses = coursesMock.filter((course) =>
      course.title.toLowerCase().includes(searchInput)
    );

    setCourses(matchingCourses);
  };

  return (
    <Section
      title="Browse all courses"
      subtitle="We recommend that you choose one of the featured courses. If you
        don't find anything for you here, search for courses in detail on
        the courses page."
    >
      <SearchBar
        placeholder="Search..."
        disabled={!courses}
        onValueChange={handleSearch}
      />
      <Button onClick={handleAddCourse}>Add new course</Button>
      <div>Courses count: {coursesLength}</div>
      {coursesLength > 0 ? (
        <Grid>
          {courses.map((course) => (
            <Course
              key={course.id}
              id={course.id}
              imgSrc={course.imgSrc}
              imgAlt={course.imgAlt}
              title={course.title}
              subtitle={course.subtitle}
              time={course.time}
            />
          ))}
        </Grid>
      ) : (
        <Loader />
      )}
    </Section>
  );
};

export default observer(Courses);
