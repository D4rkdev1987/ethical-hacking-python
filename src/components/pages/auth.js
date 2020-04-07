import React, { Component } from 'react';
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/shop-hacker.jpg";



export default class Auth extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column" 
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                

                <div className="right-column">
                    <Login />
                </div>
            </div>
        )
    }
}