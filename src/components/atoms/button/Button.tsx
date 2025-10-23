import React from 'react'

type ButtonProps = {
    children : React.ReactNode; 
    onClick : () => void; 
    className? : string; 
}

const Button:React.FC<ButtonProps> = ({children, onClick, className}) => {
  return (
    <div>
      <button className={`button ${className || " "}`} onClick={onClick}> {children} </button>
    </div>
  )
}

export default Button 
