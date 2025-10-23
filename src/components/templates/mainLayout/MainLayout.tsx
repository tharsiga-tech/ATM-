import React, {Children, useState} from "react";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";

type MainLayoutProps = {
    children : React.ReactNode;

}
const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    const [value, setValue] = useState("");

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div> 
            <Header 
                onChange={handleInput}
                value={value}
                onClickLogout = {() => alert("Logout")}
                />
        <main> {children} </main>
            <Footer/>
        </div>
    )
}

export default MainLayout