const Button = ({children , disabled , type}) => {
    return(
        <button type = {type} disabled = {disabled} className="bg-secondary rounded-button cursor-pointer p-2">{children}</button>
    )
}

export default Button ;