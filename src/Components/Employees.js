import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            name : "Ayush Agrawal"
        }
    }
    
    
    onclick () {
        this.setState({
            name : "Mukul Agrawal"
        })
    }
    render(){
        const names = ['ayush', 'mukul' , 'ankit'];
        console.log(this.props);   
        return (
            <div class="employee list">
                {
                    names.map(name => (
                        <div>
                                <h1>{name} </h1> 
                                <h1>{name}</h1>
                        </div>
                       
                    )      
                    )
                }
                {/* <button onClick={this.onclick}>Click It!</button> */}
            </div>
        )
    }
}


export default Employee;