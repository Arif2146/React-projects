import "./col-itm.css"
import  CosBtn from './cosbtn';
import {connect} from 'react-redux' 
import {addItem} from '../redux/cart/action'

const CollectionItem =({item,addItem})=>{
    const{name,price,imageUrl}=item;
    return(
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CosBtn onclick{()=>addItem(item)} inverted>Add to cart</CosBtn>
            </div>
)
}
const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);