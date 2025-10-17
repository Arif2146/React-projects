import './cosbtn.css';


const CosBtn = ({  children,...otherProps }) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    );
};

export default CosBtn;