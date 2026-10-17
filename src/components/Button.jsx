const Button = ({children , disabled , type , onclick ,className}) => {
    return(
        <button aria-label="On Click" type = {type} onClick={onclick} disabled = {disabled} className={`bg-secondary rounded-button cursor-pointer p-2 hover:bg-theared transition-all ${className}`}>{children}</button>
    )
}

export default Button ;