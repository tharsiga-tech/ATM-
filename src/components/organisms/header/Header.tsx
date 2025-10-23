import Button from "../../atoms/button/Button";
import SearchBar from "../../molecules/searchBar/SearchBar";
import "./Header.css";
import image1 from "../../../assets/logo.jpg";

type HeaderProps = {
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    value : string;
    onClickLogout: () => void;
    
}

const Header:React.FC <HeaderProps> = ({onChange, value, onClickLogout}) => {
    return (
        <div className = "header-container"> 
            <img src={image1} className="logo"/> 
            <div className="header-right"> 
                <div> 
                    <SearchBar 
                        SearchbarName="Search" 
                        placeholder="Search"
                        onChange={onChange}
                        value={value} 
                        onClick={() => alert("Hellowww")}
                        children={"Go"}
                        type="text"
                        className="app-searchbar"
                    />
                </div>
                <div> 
                    <Button onClick={onClickLogout} className="logout-btn"> Logout </Button>
                </div>
            </div>
        </div>
    )
}

export default Header