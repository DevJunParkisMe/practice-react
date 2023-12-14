import React from 'react'
import Main from './Main';
import Skills from './Skills';
import Nav from './Nav';
//import 넣어주기
import {SectionsContainer, Section} from 'react-fullpage';
const Index = () => {
    let options = {
      resetSliders: true,
  anchors: ['1', '2', '3', '4', '5', '6'],
  delay:                500, // the scroll animation speed
};
  return (
    <>
    <Nav/>
    <SectionsContainer {...options}>
        <Section><Main /></Section>
        <Section><Skills /></Section>
        <Section>Page 3</Section>
        <Section>Page 4</Section>
        <Section>Page 5</Section>
        <Section>Page 6</Section>
    </SectionsContainer>
    </>
  )
}

export default Index
