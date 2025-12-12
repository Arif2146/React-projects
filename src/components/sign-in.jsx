import "./sign-in.css";
import React from "react";
import FormInput from "./form";
import CosBtn from "./cosbtn";
import {auth,signInWithGoogle} from "../firebase/firebase-utils";


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
      email: "",
      password: "",
    })
    } catch (error) {
      console.log(error);
    }
    ;
  };
  handelchange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handelchange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handelchange}
            required
          />
           <div className="tipa">
            <CosBtn type="submit">Sign In</CosBtn>
          <CosBtn onClick={signInWithGoogle} isGoogleSignIn>
          Sign In with Google</CosBtn>
            </div>      
        </form>
      </div>
    );
  }
}

export default SignIn;
