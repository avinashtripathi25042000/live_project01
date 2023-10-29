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
        <h1 style={{textDecorationColor:"red"}}>
          <Link to="https://www.youtube.com/@jgadgurushrivallbhacharyaj5603" key="youtube-link">
            YouTube
          </Link>
        </h1>
      </div>
    );
  }
}