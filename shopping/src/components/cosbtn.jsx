import './cosbtn.css';


const CosBtn = ({  children,isGoogleSignIn,inverted,...otherProps }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CosBtn;