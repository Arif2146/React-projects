import './App.css';
import React from 'react';
import Homepage from './pages/homepage';
import {  Routes, Route } from "react-router-dom";
import ShopPage from './pages/shop';
import Header from './components/header';
import Signinup from './pages/signinup';
import {auth} from './firebase/firebase-utils';






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }; 
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={< ShopPage/>} />   
        <Route path="/signinup" element={< Signinup/>} />         
      </Routes>

    </div>
  );
}
}
export default App;
