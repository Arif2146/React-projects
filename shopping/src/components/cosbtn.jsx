import './cosbtn.css';


const CosBtn = ({  children,isGoogleSignIn,...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CosBtn;