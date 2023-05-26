import React from "react";
import Section from "../../components/Section/Section";
import SinglePage from "../../components/SinglePage/SinglePage";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import coursesMock from "../../utils/mock/courses";
import coursesStore from "../../store/CoursesStore";
import { observer } from "mobx-react";

const Course = () => {
  const { id } = useParams();
  const { getCourseById, setCourses, currentCourse, coursesLength, courses } =
    coursesStore;

  useEffect(() => {
    if (coursesLength == 0) {
      setTimeout(() => {
        setCourses(coursesMock);
        getCourseById(id);
      }, 1000);
    }
  }, []);
  useEffect(() => {
    coursesLength && getCourseById(id);
  }, [coursesLength]);

  return (
    currentCourse && (
      <Section title={currentCourse.title}>
        <SinglePage
          imgSrc={currentCourse.imgSrc}
          imgAlt={currentCourse.imgAlt}
          content={currentCourse.content}
        />
      </Section>
    )
  );
};

export default observer(Course);
