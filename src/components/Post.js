import React,{useState} from "react";


const Item = function(props){


    return(
        <div className="post">
        <div className="content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.text}
          </div>
        </div>
        <div className="but">
          <button>Delete</button>
        </div>
      </div>
    )
        
    

    
}

export default Item;