import './btn.styles.scss'

const Button_Type_Classes = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Btn = ({children, buttonType, ...otherProps}) => {
    return (
        <>
        {/* {console.log(Button_Type_Classes['google'])} */}
        <button className={`button-container ${Button_Type_Classes[buttonType] }`} {...otherProps}>
        {children}
        </button>
        </>
    )
}


export default Btn