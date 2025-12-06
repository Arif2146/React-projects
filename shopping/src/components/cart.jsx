import {ReactComponent as CartIcon} from './bag.svg';
import { connect } from 'react-redux';
import{toggleCartHidden}from '../redux/cart/action'
import './cart.css';

const Cart = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">0</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
        toggleCartHidden: () => dispatch(toggleCartHidden())        
});

export default connect(null,mapDispatchToProps)(Cart);
 
