import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from "axios";
import './styles/App.css'
class App extends React.Component {

 state = {
   total: [],
   crypt: [],
   all: [],
   name: "",
   surname: "",
   age: 0,
   id: 0
 };

 async componentDidMount() {
    axios.get(`http://localhost:8080/list`)
        .then(res=>{
          const data = res.data
          this.setState({total:data, crypt:data[0]})
        })
  }
  
  post = event =>{
    event.preventDefault();
    const man = {
      name : this.state.name,
      surname: this.state.surname,
      age: this.state.age
    }

    axios({
      method: 'post',
      url: 'http://localhost:8080/create',
      data:man
    }).then(res => {
        // console.log(res.data.age);
        this.componentDidMount()

    }).catch(
      function (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    )

    }

    delete = event =>{
      event.preventDefault();

    axios.delete(`http://localhost:8080/list/${this.state.id}`)
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        this.componentDidMount()
      })
    }

      handleChangeName = event =>{
        this.setState({
          name: event.target.value
        })
      }
      handleChangeSurname = event =>{
        this.setState({
          surname: event.target.value
        })
      }
      handleChangeAge = event =>{
        this.setState({
          age: parseInt(event.target.value)
        })
      }
      handleSetID = event =>{
        this.setState({
          id: parseInt(event.target.id)
        })

      }

render(){
  

  const items = []
  // console.log(this.state.id );  
  
  this.state.total.forEach(element => {
    items.push(element);
    return <h1>element.symbol</h1>
  });

  
    return (
        <div>
          <form onSubmit={this.post}>
            
            <label>
              Man Name:
              <input type="text" name="name" onChange={this.handleChangeName}/>
            </label>
            
            <label>
              Man Surame:
              <input type="text" name="surname" onChange={this.handleChangeSurname}/>
            </label>

            <label>
              Man Age:
              <input type="number" min={0} name="age" onChange={this.handleChangeAge}/>
            </label>

            <button type="submit">Add</button>
          
          </form>
        
          <table>
            <tbody>

              {this.state.total.map(el=>(
                <tr key={el.ID}>
                  
                  <th>
                    {el.ID}
                  </th>

                  <th>
                    {el.name}
                  </th>
                  
                  <th>
                    {el.surname}  
                  </th>
                
                  <th>
                    {el.age}  
                  </th> 

                  <th>
                    
                    <img src="https://cdn-icons.flaticon.com/png/512/542/premium/542724.png?token=exp=1655931350~hmac=f79f98690dc044e9d208252a78a2f053" onMouseDown={this.handleSetID} onMouseUp={this.delete} id={el.ID}  className="trash_Icon" alt="Delete this user"></img>
                  
                  </th>
                </tr>
              ))}

            </tbody>
          </table>
          
              

             
        </div>
    )
}  

}

export default App;





