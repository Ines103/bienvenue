import React, {Component} from 'react';


class Result extends Component {

    state= {
        name : "Mario",
        winner : true
    }

    render() {

      // n'est pas la solution optimale: return est repété 2 fois 
        //if(this.state.winner ){
            //return    <h1>Bravo {this.state.name} </h1>
        //} else {
            //return  <h1>raté !!!!! </h1>
        //}

        //if else statement : n'est pas la condition optimale car il y a plusieurs {{}}
        //let result;

        //if(this.state.winner ){
            //result = <h1>Bravo {this.state.name} </h1>
        //} else {
            //result =<h1>raté !!!!! </h1>
        //}

        //return result; 


        //if avec 2 conditions:
        //return  this.state.winner ?
         //<h1>Bravo {this.state.name}</h1> : 
         //<h1>raté</h1>



        //if avec une seule condition 
        return  this.state.winner  && <h1>Bravo {this.state.name}</h1> 
        
            

        

        
    }
}

export default Result;