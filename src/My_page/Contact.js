import React from "react";
import { Link } from "react-router-dom";

export class Contact extends React.Component
 
{
  render() {
    return (
      <div>
        <h1>
          <Link to="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.facebook.com/p/Jagatguru-Shri-Vallabhacharya-ji-Maharaj-19826964486-100063566028142/&ved=2ahUKEwjQsqG38YOCAxU6zTgGHbGvAgUQFnoECBIQAQ&usg=AOvVaw2rI4wT3O39DB7_vO9uUmQs" key="facebook-link">
            Facebook
          </Link>
        </h1>
        <h2 style={{textDecorationColor:"red"}}>
          <Link to="https://www.youtube.com/@jgadgurushrivallbhacharyaj5603" key="youtube-link">
            YouTube
          </Link>
        </h2>
        <h2 style={{textDecorationColor:"red"}}>
          <Link to="https://www.google.com/maps/place/Ayodhya,+Uttar+Pradesh/@26.7897692,82.1579681,13z/data=!3m1!4b1!4m6!3m5!1s0x399a07937e6d2823:0x5fc8f683b17f222b!8m2!3d26.7921605!4d82.1997954!16zL20vMGJrcjM?entry=ttu" key="Map-link">
            Location
          </Link>
        </h2>
        <h1>Contact Number 098269 64486</h1>
      </div>
    );
  }
}