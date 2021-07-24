import React from 'react'
import Home_pic from './home_pic.svg';
import './Home.css'
import './header.css'
import Button from './Button'
const Home = () => {
    return (
        <div className="home">


             <div className="  home_inside container-fluid d-flex flex-row  ">
       <div className="part1  container-lg d-flex flex-column justify-content-center  p-5">  
          <div id="title_home">
              CRYPTOTRAK
          </div>
          <div id="body_class" >
                Get live update of cryptocurrency here.<br/>
                Start tracking and getting live updates 
        </div>
        <Button name="Get Started "></Button>
       </div>
       <div className="part2 container">

            <img src={Home_pic} class="" alt="home_pic" />

       </div>
        </div>
        </div>
    )
}

export default Home
