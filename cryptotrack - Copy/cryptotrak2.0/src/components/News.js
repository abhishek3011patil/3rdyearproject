import React, { useState, useEffect } from 'react';

import Header from './Header'
import Card from './Card'
import './News.css'
import tracker_home from '../assests/tracker_home.jpg';

import axios from 'axios';

const News = () => {

//     const [news, setNews] = useState("");
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     axios
//       .get(
//         'https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=0540e3d2f70f498ea4ceae0b34322b96'
//       )
//       .then(res => {
//         setNews(res.data);
//         console.log(res.data);
        
//       })
//       .catch(error => console.log(error));
//   }, []);

//  const abc= res.data;

const key ="0540e3d2f70f498ea4ceae0b34322b96";  
//   console.log(abc)
//   //news.map((new)=>(console.log(new.articles)))

const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [query, setQuery] = useState('')


useEffect(() => {
  const fetchItems = async () => {

    
    setIsLoading(true)
    const result = await axios(
      `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${key}`
    )

    

    setItems(result.data)
    setIsLoading(false)
   
  }

  fetchItems()

}, )

 
if (!items.articles) {
  return <span>Loading...</span>;
}
 
  

    return (

      

        <div>
            <Header></Header>

            
            <h1>Top 3 Cryptocurrency News</h1>
            
            

            <div className="container">
                <div className="Card">

               <Card  image={items.articles[0].urlToImage} 
               alt="Tracker" 
               h2={items.articles[0].title}
               p={items.articles[0].description} />
                  </div>
               <div className="card-hori card-hori1">
                 <div>
                 <h2>{items.articles[1].title}</h2>
                 <p> {items.articles[1].description}</p>
                 <a href={items.articles[1].url}>LEARN MORE></a>
                 </div>
                 <img src={items.articles[1].urlToImage} alt="new world" />

                
                 </div>

                 <div className="card-hori card-hori2">
                 <div>
                 <h2>{items.articles[2].title}</h2>
                 <p> {items.articles[2].description}</p>
                 <a href={items.articles[2].url}>LEARN MORE></a>
                 </div>
                 <img src={items.articles[2].urlToImage} alt="new world" />

                
                
                
                 </div> 

              </div>

       
               
           

        </div>
    )
}

export default News
