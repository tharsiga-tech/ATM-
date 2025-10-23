import type React from "react";
import "./Label.css";

type LabelProps = {
    htmlFor? : string;
    children : React.ReactNode;
    className? : string;
}

const Label:React.FC<LabelProps> = ({ htmlFor, children, className}) => {
    return (
        <label htmlFor={htmlFor} className={`label ${className || " "}`}> {children} </label>
    )
}

export default Label