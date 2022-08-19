import React, {useState} from 'react';

const Counter = function (){
    const [likes,setLikes] = useState(0)


    function inc(){
      setLikes(likes+1)
    }
  
    
    function dec(){
      setLikes(likes-1)
    }
  
    return (
      <div className="App">
        <h2>{likes}</h2>
        <button onClick={()=>inc()}>Inc</button>
        <button onClick={()=>dec()}>Dec</button>
  
      </div>
    );
}

export default Counter;