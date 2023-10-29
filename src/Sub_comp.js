import React from "react";
import subscribe from "./images.png";
import unsubcribe from "./loud-sound-not-allowed-keep-3899206.jpg";
import { colours } from "nodemon/lib/config/defaults";

export class Subs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:<h2><center>Subscribe my chanel</center></h2>,
            btnmsg:<h2 style={{marginBottom:"20px"}}><center>Subscribe</center></h2>,
            icon: unsubcribe,
            bgcol:"red"
        }
    
    }

    changebtntext=()=>{
        this.setState({
            msg:<h2><center>Click on bell icon for latest updates</center></h2>,
            btnmsg:<h2 style={{marginBottom:"20px"}}><center>Subscribed</center></h2>,
            bgcol:"Green"
            
        });
    }
    change_img=()=>{
        this.setState({
            msg:<h2><center>Thanks for suscribe</center></h2>,
            icon: subscribe
        })
    }
    
    render(){
        return(<div>
            <center>
        <h1>Goodmines</h1>
        <p>{this.state.msg}</p>
        <button style={{ backgroundColor:this.state.bgcol, padding:"5px 40px", borderRadius:"10px"}} onClick={this.changebtntext} >{this.state.btnmsg}</button>
        <img onClick={this.change_img} src={this.state.icon} width="50px"></img>
        </center> </div>
        )
    }
    
}
