import "./header.css";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "./logo.svg";
import {auth} from '../firebase/firebase-utils';
import { connect } from "react-redux";
import Cart from "./cart.jsx";
import CartDropdown from "./cart-dropdown.jsx";



const Header =  ({ currentUser, hidden}) => (
    <div className="header">
      <Link className="logo-container" to="/">
         <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ?(
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
        ):(
        <Link className="option" to="/signinup">
          SIGN IN
        </Link>
      )}
      <Cart/>
      </div>
      {
        hidden ? null : <CartDropdown/>
      }
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);