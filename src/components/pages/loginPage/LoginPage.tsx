import {useState} from 'react'
import Input from '../../atoms/input/Input'
import Button from '../../atoms/button/Button'
import image from "../../../assets/image.png"
import "./LoginPage.css"
import MainLayout from '../../templates/mainLayout/MainLayout'

const LoginPage = () => {
    
    const [cardNumber, setCardNumber] = useState("");
    const [pinNumber, setPINNumber] = useState("");
    // const {login}:any=useContext(AuthContext) 

    const handleCardNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    }

    const handlePINNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPINNumber(e.target.value);
    }

    // const handleLogin=()=>{
    //     login(text) }

    return (
        <div className="login-container"> 
            <form className="login-form">
                <img src={image}></img>
                <h4> Welcome to Our Bank Sign In</h4>
            <Input className="login-form-input"
                id="cardnumber"
                type="number"
                name="cardnumber"
                value={cardNumber}
                placeholder="Enter the Card Number"
                onChange={handleCardNumber}
            />

            <Input className="login-form-input2"
                id="pinpassword"
                type="password"
                name="pinnumber"
                value={pinNumber}
                placeholder="Enter the PIN Number" 
                onChange={handlePINNumber}
            />

            <Button onClick={() => alert("Login Successfully!")} className="login-button"> Login </Button>
        </form>
        
        </div>
        
    )
    
}

export default LoginPage