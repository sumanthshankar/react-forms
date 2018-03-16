import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            emailError: '',
            password: '',
            confirmPassword: '',
            license: '',
            forked: false,
            gender: ''
        }
      }
      

    submitForm() {
        console.log('this.state', this.state);
        this.resetForm();
    }
    
    resetForm() {
        this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            license: '',
            forked: false,
            gender: ''
        });
    }

    render() {
        return(
            <form>
                <label>Name:</label>
                <input type="text"
                        name="name"
                        value={this.state.name} 
                        onChange={event => this.setState({name: event.target.value})}
                />   
                <br/>   
                <label>Email:</label>
                <input type="text"
                       name="email" 
                       value={this.state.email} 
                       onChange={event => this.setState({email: event.target.value})}
                />
                <br />
                <label>Password:</label>
                <input type="password"
                       name="password"
                       value={this.state.password} 
                       onChange={event => this.setState({password: event.target.value})}
                />
                <br />
                <label>Confirm Password:</label>
                <input type="password"
                       name="confirmPassword"
                       value={this.state.confirmPassword} 
                       onChange={event => this.setState({confirmPassword: event.target.value})}
                />
                <br/>    
                <label>License</label>
                <select name="license"
                        value={this.state.license} 
                        onChange={event => this.setState({license: event.target.value})}>
                    <option value="mit">MIT</option>
                    <option value="isc">ISC</option>
                    <option value="apache-2.0">Apache</option>
                    <option value="gpl">GPL</option>
                </select>
                <br />
                <label>Include Forked: </label>
                <input type="checkbox" 
                       name="forked"
                       value="true"
                       checked={this.state.forked}
                       onChange={event => this.setState({forked: event.target.checked})}
                       />
                <br />
                <label>Gender: </label>
                <input type="radio" 
                       name="gender"
                       value="male"
                       checked={this.state.gender === "male"}
                       onChange={event => this.setState({gender: event.target.value})}
                       />
                <input type="radio" 
                       name="gender"
                       value="female"
                       checked={this.state.gender === "female"}
                       onChange={event => this.setState({gender: event.target.value})}
                       />       
                <br />
                <button type="button" 
                        className="btn btn-primary" 
                        disabled={!true}
                        onClick={() => this.submitForm()}>Submit</button>
            </form>
        )
    }
}

export default App;