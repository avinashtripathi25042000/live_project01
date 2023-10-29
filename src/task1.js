import React from "react";

export function Big_box(){

    return (<h1>PROJECT  TITLE</h1>);    
}

export function Para1() {
    return (
      <div>
         <h2 style={{color: "green"}}>Para1 Project Description</h2>
         <p><h3>The "NewsHub" project is a web-based news application designed<br /> 
to provide users with a convenient and user-friendly platform <br /> 
for accessing the latest news articles, updates, and information <br /> 
from various sources. The goal of this project is to create a responsive <br /> 
and engaging news portal that caters to a wide range of users, from casual<br />  
readers to avid news enthusiasts.<br></br>now les't go to next para</h3></p>
       {/* <label htmlFor="para1">Para 1 - </label>
        <textarea id="para1" name="para1" rows="4" cols="50"></textarea>*/}
      </div>
    );
}
    export function Para2() {
        return (
          <div>
             <h2 style={{color: "orange"}}>Para2 Technology Stack</h2>
             <p><h3>Frontend: HTML, CSS, JavaScript, React (or other modern frontend framework)<br />
Backend: Node.js, Express.js (or other suitable backend technologies)<br />
Database: PostgreSQL, MongoDB (or other appropriate database systems)<br />
User Authentication: OAuth 2.0, JWT (JSON Web Tokens)<br />
Hosting: AWS, Heroku, or other cloud hosting services<br />
Content Aggregation: RSS feeds, web scraping (if necessary)<br />
Notifications: Firebase Cloud Messaging, email services<br />
Analytics: Google Analytics, custom analytics tools</h3></p>
           {/* <label htmlFor="para2">Para 2 - </label>
            <textarea id="para2" name="para2" rows="4" cols="50"></textarea>*/}
          </div>
        );
  }
  export function Para3() {
    return (
      <div>
         <h2 style={{ color:'red'}}>Para3 Codes </h2>
         <p><h3 >// routes/news.js<br />
const express = require('express');<br />
const router = express.Router();<br />
const News = require('../models/news');<br />

// Define your routes for creating, reading, updating, and deleting news articles here<br />

module.exports = router;
</h3></p>
      { /* <label htmlFor="para3">Para 3 - </label>
        <textarea id="para3" name="para3" rows="4" cols="50"></textarea> */}
      </div>
    );
  
    }
    export function Para4() {
        return (
          <div>
             <h2 style={{color:"blue"}}>Para4 Conclusion</h2>
             <p><h3>In conclusion, a well-designed news web app has 
                <br />the potential to bridge the gap between news organizations
                 and their readers, delivering timely and relevant information <br /> 
                 in a format that is both engaging and accessible. As technology  <br />
                 continues to evolve, the future of journalism relies on the ability to <br />
                  adapt and leverage digital tools to deliver news to an ever-wider audience <br />
                   while upholding the highest standards of reporting and integrity.</h3></p>
           {/*  <label htmlFor="para4">Para 4 - </label>
            <textarea id="para4" name="para4" rows="4" cols="50"></textarea>*/}
          </div>
        );
        }
