import React from 'react'

import Button from './Button';
import './Home.css'
import Header from './Header'
import Card from './Card.js';

import Home_pic from './home_pic.svg';
import tracker_home from '../assests/tracker_home.jpg';
import news_home from '../assests/news_home.jpg';
import contact_home from '../assests/contact_us_home.jpg';
import Footer from './Footer';


const Home = () => {
    return (
        <div className="Home" >
            <section className="one">

            <div className="home">

            <Header></Header>
                <div className="home_img"></div>
                <h1>Welcome to CryptoTrak</h1>
               
               </div>
               </section>

               <section id="intro">
                   <div>
                   <p>Lorem ipsum dolor, sit amet consectetur 
                       adipisicing elit.<br/> Dolores consectetur voluptatum recusandae. <br/>
                       Fuga quaerat expedita deleniti possimus, maxime sequi perspiciatis <br/>
                       sint repudiandae molestiae, quidem laborum, <br/>provident adipisci temporibus nesciunt incidunt!</p>
                       </div>
                       <img src={Home_pic} alt="intro_pic" />
               </section>

               <section className="tools ">
                     <h1>Tools</h1>
                   <div className="cardscontainer">

                   <div className="cards c1">
                       <i class="fas fa-file-contract"></i>
                   <h1>Tracker</h1>
                   <a >Learn more</a>
                   </div>

                   <div className="cards c2">
                       <i class="fas fa-file-contract"></i>
                   
                   <h1>Converter</h1>
                   <a >Learn more</a>
                   </div>
                   
                   <div className="cards c3">
                       <i class="fas fa-file-contract"></i>
                   
                   <h1>Converter</h1>
                   <a >Learn more</a>
                     </div>

                   </div>

               </section>


               <div className="cards_container">
                   <Card image={tracker_home} alt="Tracker" h2="Tracker" p="Start tracking your favroute cryptocurrency now"></Card>
                   <Card image={news_home} alt="Tracker" h2="Tracker" p="Start tracking your favroute cryptocurrency now"></Card>
                   <Card image={contact_home} alt="Tracker" h2="Tracker" p="Start tracking your favroute cryptocurrency now"></Card>
                   <Card image={tracker_home} alt="Tracker" h2="Tracker" p="Start tracking your favroute cryptocurrency now"></Card>


               </div>

               
               <div id="github">
                   <div>
                   <h1>Contribute to Cryptotrack</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dolorum natus, quaerat quos expedita modi rem minima pariatur soluta
                        harum et fuga delectus 
                        maxime cupiditate, blanditiis cum ex id possimus quibusdam!</p>
                   <a href="https://github.com/abhishek3011patil/3rdyearproject"><span><i class="fab fa-github"></i></span>Github</a>
                   </div>

                   <img src={Home_pic} alt="github" />
                   </div>  

                   <Footer></Footer>
                      

        </div>
    )
}

export default Home
