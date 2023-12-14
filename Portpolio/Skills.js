import React from 'react'
import SkillsImage from './static/우주사진_포폴2.jpg'
import { useParams } from 'react-router-dom';
const Skills = () => {
  return (
    <>
        <div className='bg-black overflow-hidden h-screen'>
            <img src={SkillsImage} className='opacity-30'/>
        </div>
    </>
  )
}

export default Skills
