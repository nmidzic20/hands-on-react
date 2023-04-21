import React from 'react'
import Section from '../../components/Section/Section'
import SinglePage from '../../components/SinglePage/SinglePage'
import LectureImg1 from "../../assets/images/lecture-1.jpg"

const Course = () => {
  return (
    <Section
      title="Introduction"  
    >
      <SinglePage
        imgSrc={LectureImg1}
        imgAlt="Lecture1"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          omnis, aspernatur veritatis iure quisquam vel quos, numquam eaque
          at, saepe incidunt harum. Voluptates eligendi iste ullam fuga
          officiis distinctio earum? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Rem iusto sequi in sit, consequuntur similique
          ullam eligendi adipisci. Neque odit sequi modi iusto adipisci
          recusandae vitae sapiente cum sit est. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Saepe voluptates minus nulla
          voluptatibus quod voluptatum debitis aspernatur magnam eius
          nostrum, quaerat facere molestias modi, amet praesentium? Tempore
          nihil dignissimos veniam."
      />
    </Section>
  )
}

export default Course