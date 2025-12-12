import './cart-dropdown.css'
import  {connect} from 'react-redux'
import CartItem from './cart-item.jsx';
import CosBtn from './cosbtn.jsx';


const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {
        cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem} />))
    }
    </div>
       <CosBtn>GO TO CHECKOUT</CosBtn>
    </div>
  )
}

const mapDispatchToProps = ({cart: {cartItems}}) => ({
    cartItems
});
export default connect(mapDispatchToProps)(CartDropdown);
