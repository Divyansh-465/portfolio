import React from 'react'
import './Projects.css'
import picture from './Picture1.png'

function Projects() {
  return (
    <div className='project'>
      
      <h1>Projects</h1>
      <h3>Space War Game</h3>
      <div className="flex">
        <img className= "picture" src={picture} alt=""/>
        <h5>I worked over this game in Python language by using Pygame library. I love developing GUI based applications in programming languages like Java and Python. It was fun to use my Python knowledge and implementing logics in this game. </h5>
      </div>
    </div>
  )
}

export default Projects
