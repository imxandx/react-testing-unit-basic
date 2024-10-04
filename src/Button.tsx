import { ReactNode } from "react"

const Button = ({disabled, children, onClick} : {disabled: boolean, children: ReactNode, onClick: () => void}) => {

    return (
        <button onClick={onClick} style={{backgroundColor: disabled ? "rgb(40, 40, 40)" : "red"}}>{children}</button>
    )
}

export default Button