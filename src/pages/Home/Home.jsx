import React from "react";
import Course from "../../components/Course/Course";
import { Grid } from "../../utils/styles/generalStyles";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import coursesMock from "../../utils/mock/courses";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import coursesStore from "../../store/CoursesStore";
import { observer } from "mobx-react";

const Home = () => {
  const { courses, coursesLength, setCourses } = coursesStore;
  useEffect(() => {
    if (coursesLength == 0) {
      setTimeout(() => {
        setCourses(coursesMock);
      }, 1000);
    }
  }, []);

  return (
    <>
      <Hero />
      <Section
        title="Open your new possibilities"
        subtitle="We recommend that you choose one of the featured courses. If you
                    don't find anything for you here, search for courses in detail on
                    the courses page."
      >
        {coursesLength > 0 ? (
          <Grid>
            {courses.map(
              (course, index) =>
                index < 4 && (
                  <Course
                    key={course.id}
                    id={course.id}
                    imgSrc={course.imgSrc}
                    imgAlt={course.imgAlt}
                    title={course.title}
                    subtitle={course.subtitle}
                    time={course.time}
                  />
                )
            )}
          </Grid>
        ) : (
          <Loader />
        )}
      </Section>
    </>
  );
};

export default observer(Home);
