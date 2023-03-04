import React, { Component } from 'react'

export default class App extends Component {

  state= {Person:{Fullname:"Med Khoudi",Bio: "Bad front End Developper", imgSrc:"https://www.detectiveconanworld.com/wiki/images/c/c5/Kogoro_Mouri_Profile2.png", Profession:"Drug Dealer"}, Show : true, count:0}
  Handletoggle=()=>this.setState({Show:! this.state.Show});
 HandleCount =()=>this.setState({Count:this.state.count+1})
 
  componentDidMount(){
setInterval(this.HandleCount, 1000);

 }

 
 
  render() {
    return (
      <div >
       <button onClick={this.Handletoggle}>ShowHide</button>
       
      {this.state.Show&&<>
        <h2>
          {this.state.Person.Fullname}
        </h2>
        <h2>
          {this.state.Person.Bio}
        </h2>
        <h2>
          {this.state.Person.Profession}
        </h2>
        <img src={this.state.Person.imgSrc} alt= "goahead"></img>
        
        <h2 onTimeUpdate={this.HandleCount}> Timer : {this.state.count}</h2>
        </>}  
      </div>
    )
  }
}
