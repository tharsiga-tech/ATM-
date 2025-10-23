import type React from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import "./SearchBar.css"; 

type SearchBarProps = {
    SearchbarName : string;
    placeholder : string;
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    value : string;
    className? : string;
    type : "text" | "number" | "password";
    children : React.ReactNode;
    onClick : () => void;
    SearchbarNameClassName? : string;
}

const SearchBar: React.FC <SearchBarProps> = ({SearchbarName, children, onChange, value, className, type, onClick, placeholder, SearchbarNameClassName}) => {
    return (
        <div className={`searchbar ${SearchbarNameClassName}`}> 
            <Input 
                name = {SearchbarName}
                placeholder = {placeholder} 
                onChange = {onChange}
                value = {value}
                className = {className}
                type = {type}
                id = {SearchbarName}
            />

            <Button onClick={onClick} className="btn"> {children} </Button>
        </div>
    )
}

export default SearchBar