import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


export class Home extends React.Component {
    render() {
        return (<div>
            <header>
                
            <h1 className="display-4">Jagatguru Shri Vallabhacharya ji Maharaj</h1>
            
            </header>
             <img
             src='./photos/swami' // Replace with the actual path to your image
             alt="Jagatguru Shri Vallabhacharya ji Maharaj"
           />
           </div>
        );
    }
}