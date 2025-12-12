import './App.css';
import React from 'react';
import Homepage from './pages/homepage';
import { Routes, Route, Navigate } from "react-router-dom";
import ShopPage from './pages/shop';
import Header from './components/header';
import Signinup from './pages/signinup';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signinup"
            element={
              currentUser ? <Navigate to="/" replace /> : <Signinup />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
