import "./col-itm.css"
import  CosBtn from './cosbtn';

const CollectionItem =({id,name,price,imageUrl})=>{
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
            <CosBtn inverted>Add to cart</CosBtn>
            </div>
)
}
export default CollectionItem;