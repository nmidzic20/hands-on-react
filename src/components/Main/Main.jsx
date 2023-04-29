import React from 'react'
import { Main as MainWrapper } from "./MainStyle"

const Main = ( props ) => {
  return (
    <MainWrapper>
      {props.children}
    </MainWrapper>
  )
}

export default Main