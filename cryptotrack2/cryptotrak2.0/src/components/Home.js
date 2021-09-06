import React from 'react'

import Button from './Button';
import './Home.css'
import Header from './Header'
import Card from './Card.js';

import Home_pic from './home_pic.svg';
import logo2 from '../assests/hom_pic.svg';
import tracker_home from '../assests/tracker_home.jpg';
import news_home from '../assests/news_home.jpg';
import contact_home from '../assests/contact_us_home.jpg';
import github from '../assests/github.png'
import Footer from './Footer';
import logo from '../assests/logo.svg';



const Home = () => {
   
//     const texts = ["Track cryptocurrencies ,portfolio a much more!"];
// let count=  0;
// let index =0;
// let currentText = '';
// let letter = '';

// function type(){

//     if(count === texts.length){
//         count = 0;
//     }

//    currentText = texts[count];
    
//     letter = currentText.slice(0,++index);
//  document.querySelector('.type').textContent=letter;

//     if(letter.length === currentText.length){
//         count++;
       
//     }
//     setTimeout(type,100)

// }; 

    return (
        <div className="Home" >
            

            <div className="home">

            <Header></Header>
            <div className="home_img">
            <h2 > Track cryptocurrencies ,portfolio and 
                much more!</h2>
                <p>Accurately tracking cryptocurrency investment performance and taxes is hard. We make it easy and help you save money.</p>
                 <a href="#">Get Started</a> 
            </div>
                
               
               </div>
               

               <section id="intro">
                   <div>
                       <p>Track your favorite Cryptocurrency's <b>Market Value, Price, Total volume,</b> 
                           <br/> and much more in real time. You can also track your Portfolio
                           <br/> and get live news and updates of crypto all in website.</p>
                   </div>
                       <img src={logo} alt="logo" />
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
                   
                   <h1>Portfolio</h1>
                   <a >Learn more</a>
                     </div>

                   </div>

               </section>


               <div className="cards_container">
                   <Card image={tracker_home} alt="Tracker" h2="Tracker" p="Start tracking your favorite cryptocurrency now."></Card>
                   <Card image={news_home} alt="News" h2="News" p="Get Live news of cryptocurrency."></Card>
                   <Card image={contact_home} alt="Contact Us" h2="Contact Us" p="Do you have any querries? Contact us."></Card>
                   <Card image={tracker_home} alt="Tracker" h2="portfolio" p="Start tracking your favroute cryptocurrency now"></Card>


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

                   <img src={github} alt="github" />
                   </div>  

                   <Footer></Footer>
                      

        </div>
    )
}

export default Home
