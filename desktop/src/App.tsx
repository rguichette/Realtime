import React, {useState} from 'react';
import { io } from 'socket.io-client';



const socket = io("localhost:3030");


function App() {

  const [user, setUser] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  


  return (
    <div className="App">
      
    {
      loggedIn ? <div><p>hello {user}</p></div> :
      <div>
      <input type={"text"} placeholder="name" onChange={(e)=>{setUser(e.target.value)}}/> 
      
      <button onClick={()=>{
          console.log(user)
        if(user.length > 2)
          setLoggedIn(true)


      }}>login</button></div>
    }</div>
  );
}

export default App;
