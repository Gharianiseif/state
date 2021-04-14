import React from 'react'





 class Profile extends  React.Component {


    constructor() {
        console.log("Contructor ()");
        super();
        this.state = {
            timer: 0,
            intervall: null,
        };
    }

    componentDidMount() {
        console.log("Component Did Mount ()");
        
        this.setState({
            intervall: setInterval(
                () => this.setState({ timer: this.state.timer + 1 }),
                1000
            ),
        });
        
    }



    render() {
        return (
            <div>
                 
            
               <div className="container" >
               <h2 >Mon profil</h2>    
               <br/><br/>
               <div className="card" style={{width:"400px"}}>
                 <img className="card-img-top" src={this.props.imgSrc} alt="Card" style={{width:"100%"}}/>
                 <div className="card-body">
                   <h4 className="card-title">{this.props.fullName}</h4>
                   <h6 className="card-title">{this.props.profession}</h6>
                   <p className="card-text">{this.props.bio}</p>
                   <a href="#" className="btn btn-primary" >See Profile</a>
                 </div>
               </div>
               <br/>
               <button type="button" className="btn btn-primary">
               Temps Ecoulé : <span className="badge bg-secondary">{this.state.timer}</span>
</button>
                <p> </p>
             </div>
                     </div>
           
        )
    }
}




export default Profile