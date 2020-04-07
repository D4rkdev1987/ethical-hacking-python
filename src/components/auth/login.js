import React, { Component } from 'react'
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
      super(props)

      this.state = {
          email: "",
          password: "",
          errorText: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
  }

  handleSubmit(event) {
    axios.post("https://api.devcamp.space/sessions", 
        {
            client: {
                email: this.state.email, 
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                console.log("You can come in")
            } else {
                this.setState({
                    errorText: "Wrong Email or Password"
                })
            }
        }).catch(error => {
            this.setState({
                errorText: "An error occurred"
            })
        });
    event.preventDefault();
  }

  render() {
      return (
          <div>
            <h1>Login to Access your dahboard</h1>

            <div>{this.state.errorText}</div>

            
            {/* <h2>{this.state.email}</h2>
            <h2>{this.state.password}</h2>
            to test the email and password code above */}

            <form onSubmit={this.handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    placeholder="your Email here"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="your password please"
                    value={this.state.password}
                    onChange={this.handleChange}
                />          

                <div>
                    <button type="submit">Login</button>
                </div>    
            </form>
          </div>
      )
  }
}
