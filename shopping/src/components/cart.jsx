import {ReactComponent as CartIcon} from './bag.svg';
import './cart.css';

const Cart = () => {
    return (
        <div className="cart-icon">
        <CartIcon className="shopping-icon" />
         <span className="item-count">0</span>
        </div>
    );
}    
export default Cart;