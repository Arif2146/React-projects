import {ReactComponent as CartIcon} from './bag.svg';
import { connect } from 'react-redux';
import{toggleCartHidden}from '../redux/cart/action'
import './cart.css';

const Cart = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
        toggleCartHidden: () => dispatch(toggleCartHidden())        
});

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
 
