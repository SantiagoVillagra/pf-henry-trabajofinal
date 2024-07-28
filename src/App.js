import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing"
import Home from "./Components/Home/Home"
import Search from "./Components/Search/Search"
import Shop from "./Components/Shop/Shop"
import Login from "./Components/Login/Login"
import NavBar from "./Components/NavBar/NavBar"
import Detail from "./Components/Detail/Detail"
import Form from "./Components/Form/Form"
import NotFound from "./Components/NotFound/NotFound"
import SignUp from "./Components/SignUp/SignUp"
import { useEffect } from "react";
import 'typeface-montserrat';
import { useDispatch } from "react-redux";
import sneakers from "./mockDB/mockDB";


function App() {
 
  const dispatch = useDispatch()
  let location = useLocation()
  



  return (
    <div>
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/detail/:ID' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
