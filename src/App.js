import Profile from './profile/Profile'
import './App.css';



import React, { Component } from 'react'

 class App extends Component {

  state =  {Person : {fullName :"ghariani seif",bio:"Student", imgSrc:"/profil2.png",profession:"Developer" },
  show:false
}
//  let show =false;


 handleClick=()=>this.setState({show:!this.state.show})


  render() {
    return (
      
      <div>
<br/><br/><br/>

  <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button"  onClick={this.handleClick}>
  {this.state.show ? "Hide Profile" : "Show Profile"} </button>
</div>

{this.state.show  && <Profile fullName={this.state.Person.fullName}  profession={this.state.Person.profession} bio={this.state.Person.bio} imgSrc={this.state.Person.imgSrc}  /> }


      
      </div>
    )
  }
}










export default App;
