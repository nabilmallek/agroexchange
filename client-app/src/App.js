import React,{useEffect} from "react";
import { Switch,Route, Link } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import Sigin from "./Components/Signin/Sigin";
import Signup from "./Components/Signup/Signup";
import PrivateRoute from "./Components/router/PrivateRoute";
import {useDispatch} from "react-redux"
import {current} from "./Js/Actions/user"
import NavBar from "./Components/navbar/NavBar";
import HomePage from "./Components/home/HomePage";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Addpostes from "./Components/addpostes/Addpostes";
import PostList from "./Components/postList/PostList";
import AdminRoute from "./Components/router/AdminRoute";




function App() {
  const isAuth=localStorage.getItem("token")

  const dispatch= useDispatch()
  useEffect (()=>{
    dispatch(current())
  },[])
  
  
  
  return (
    <div className="App">
<NavBar/> 
   <Switch>

   <Route exact   path='/' component= {HomePage}/>

     <Route   path='/signup' component= {Signup}/>
     <Route   path='/list' component= {PostList}/>
     
     <Route  path='/signin' component= {Sigin}/>
     <Route  path='/about' component= {About}/>
     <Route  path='/contact' component= {Contact}/>
     <PrivateRoute path ='/addpost' component = {Addpostes}/>

      <AdminRoute path ='/dashbord' component = {Dashbord}/>
     </Switch>
    
    <Footer/>
    {isAuth?<Link to="/addpost"><div className="addbtn">Add post</div></Link> :null}
   
    </div>
  );
}

export default App;
