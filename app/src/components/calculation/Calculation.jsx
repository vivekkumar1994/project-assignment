import React, { Component } from 'react'

export class Calculation extends Component {
    constructor(){
        super()

        this.state = {
            number:"",
            msg:""
        }
    }

    checkPrime(e){
        let num = parseInt(e.target.value);
        let message;

        if(num >= 2){
            if(num == 2){
                message = "Prime Number"
            }
            else{
                let prime = true;
                for(let i = 2; i < num;i++){
                    if(num % i ==0){
                    prime = false;
                    break;
                }
            }
            
            if(prime){
                message = "Prime Number"
            }
            else{
                message = "Not Prime Number"
            }

        }
    }
    else{
        message = "Not Prime Number"
    }
        this.setState({
            number:num,
            msg:message
        });
}
  render() {
    return (
      <div className="cal">
         <input type="number" value={this.state.number} onChange={this.checkPrime.bind(this)} />
         <h1>{this.state.msg}</h1>
      </div>
    )
  }
}

export default Calculation

