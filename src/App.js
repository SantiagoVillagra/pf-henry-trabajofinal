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
import UserDashboard from "./Components/UserDashboard/UserDashboard"
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard"
import { useEffect } from "react";
import 'typeface-montserrat';
import { useDispatch, useSelector } from "react-redux";
import sneakers from "./mockDB/mockDB";


function App() {
 
  const dispatch = useDispatch()
  const loggedUserData = useSelector(state => state.loggedUserData)
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
        {
          !loggedUserData.username && <Route path='/login' element={<Login/>}/>
        }
        {
          !loggedUserData.username && <Route path='/signup' element={<SignUp/>}/>
        }
        {
          loggedUserData.username && !loggedUserData.isadmin && <Route path='/dashboard' element={<UserDashboard/>}/>
        }
        {
          loggedUserData.isadmin && <Route path='/dashboard' element={<AdminDashboard/>}/>
        }
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
