import './App.css'
import HomePage from './components/pages/homePage/HomePage'
import LoginPage from './components/pages/loginPage/LoginPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={ <LoginPage/> }/>
         <Route path="/home" element={ <HomePage/> }/>
       </Routes>
       </BrowserRouter>
    </>

    // <AuthProvider>
    //     <BrowserRouter>
    //     <AppRoutes/>
    //     </BrowserRouter>
      
    //   </AuthProvider>
  )
}

export default App
