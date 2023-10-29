import logo from './logo.svg';
import './App.css';

//import { Subs } from './Sub_comp';
import { Master } from './My_page/Master';
import { Home } from './My_page/Home';
import { Admin } from './My_page/Admin';
import { Contact } from './My_page/Contact';
import { Events } from './My_page/Events';
import { About } from './My_page/About';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';



export default function App() {
  return(
  <div className='App'>
<center>
<BrowserRouter>
  <Routes>
  
    <Route path='/' element={<Master></Master>}>
    <Route index element={<Home></Home>}></Route>
    <Route path="admin" element={<Admin></Admin>}></Route>
    <Route path="event" element={<Events></Events>}></Route>
    <Route path="about" element={<About></About>}></Route>
    <Route path="contact" element={<Contact></Contact>}></Route>
    </Route>
  </Routes>

</BrowserRouter>
</center>
</div>
  );
}
 /* return(
    <center>
  <Subs></Subs>
  </center>);
 return(
    <div>
   
    <center>
    <FunctionalComponent></FunctionalComponent>
    
    <Detalis></Detalis>
    <br></br>
    <Mybutton></Mybutton>
    <br></br>
    <br></br>
    <Mybutton1></Mybutton1>

    </center>
    <center><Big_box></Big_box></center>
    <Para1></Para1>
    <Para2></Para2>
    <Para3></Para3>
    <Para4></Para4>
    
    </div>
    
    );
    
  const fruits={
    name:"mango",
    color:"yellow"
  }
  return (
    <div className="App">
      <Fruit fruits={fruits} />
      <hr></hr>
      <Car />
    </div>
  );

 {/* return (
    <div>
   } <h1> Hey Avi </h1>
    <h2>'div' use to group tags</h2>
    <center>
    <FunctionalComponent></FunctionalComponent>
    
    <Detalis></Detalis>
    <br></br>
    <Mybutton></Mybutton>
    <br></br>
    <br></br>
    <Mybutton1></Mybutton1>

    </center>
    </div>
  );*/

  
  



