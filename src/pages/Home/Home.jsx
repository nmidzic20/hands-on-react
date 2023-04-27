import React from 'react'
import Course from "../../components/Course/Course"
import Grid from "../../components/Grid/Grid"
import Hero from "../../components/Hero/Hero"
import Section from "../../components/Section/Section"
import {courses} from "../../assets/courses"


const Home = () => {

    let courseItems = courses.map((course) => (
        <Course
            key = {course.id}
            imgSrc = {course.imgSrc}
            imgAlt = {course.imgAlt}
            title = {course.title}
            subtitle = {course.subtitle}
            time = {course.time}
        />
    ));

    return (
        <>
            <Hero />
            <Section 
                title="Open your new possibilities" 
                subtitle="We recommend that you choose one of the featured courses. If you
                    don't find anything for you here, search for courses in detail on
                    the courses page."
            >
                <Grid>
                    {courseItems}
                    {courseItems}
                </Grid>
            </Section>
        </>
    )
}

export default Home