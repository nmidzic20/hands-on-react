import Course from "./components/Course/Course"
import Grid from "./components/Grid/Grid"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section"
import LectureImg1 from "./assets/images/lecture-1.jpg"

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Section 
          title="Open your new possibilities" 
          subtitle="We recommend that you choose one of the featured courses. If you
                don't find anything for you here, search for courses in detail on
                the courses page."
        >
          <Grid>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
            <Course
              imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"
            ></Course>
          </Grid>
        </Section>
      </main>
    </>
  )
}

export default App
