import "./sign-in.css"
import React from "react"


class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

handelSubmit = (event) => {
    event.preventDefault();

    this.setState({
        email: '',
        password: ''
    })

}
handelchange = event => {
    const {value,name} =event.target
    this.setState({
        [name]:value
    });

}

    render(){
        return(
            <div className="sign-in">
                 <h2>I already have an account</h2>
                 <span>Sign in with your email and password</span>

            <form onSubmit={this.handelSubmit}>
                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handelchange} required/>
                <label>Email</label>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handelchange} required/>
                <label>Password</label>
                <input type="submit" value="Submit Form"/>
            </form>
            </div>
        )
    }
    }

    export default SignIn;