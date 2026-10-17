const Button = ({children , disabled , type , onclick ,className}) => {
    return(
        <button type = {type} onClick={onclick} disabled = {disabled} className={`bg-secondary rounded-button cursor-pointer p-2 hover:bg-theared transition-all ${className} ${disabled && "disabled:disabled:cursor-not-allowed disabled:bg-gray-400"}`}>{children}</button>
    )
}

export default Button ;