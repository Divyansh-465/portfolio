import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <>
        <h1>Skills</h1>
        <div className= "container">
            <div className= "item">HTML, CSS & JS<div className="level"></div></div>
            <div className= "item">React JS<div className="level"></div></div>
            <div className= "item">Node JS<div className="level"></div></div>
        </div> 
        <div className= "container">
            <div className= "item">Python Django<div className="level"></div></div>
            <div className= "item">My SQL<div className="level"></div></div>
            <div className= "item">MongoDB<div className="level"></div></div> 
        </div>  
        <div className= "container">
            <div className= "item">Machine Learning<div className="level"></div></div>
            <div className= "item">Web Scrapping<div className="level"></div></div>
            <div className= "item">Project Management<div className="level"></div></div> 
        </div>
    </>
  )
}

export default Skills