import './App.css';
import React from 'react';
import Homepage from './pages/homepage';
import {  Routes, Route } from "react-router-dom";
import ShopPage from './pages/shop';
import Header from './components/header';
import Signinup from './pages/signinup';
import {auth, createUserProfileDocument } from './firebase/firebase-utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }; 
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()  
            });
          })
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={< ShopPage/>} />   
        <Route path="/signinup" element={< Signinup/>} />         
      </Routes>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps)(App); 