import React from 'react';
import AdminLogin from './components/admin/adminLogin';
import DriverRegister from './components/admin/driverRegister';
import DriverLogin from './components/driver/driverLogin';
import NavigationBar from './components/NavigationBar';
import UserLogin from './components/user/userLogin';
import PageNotFound from './components/pageNotFound';
import {Routes,Route,Link, parsePath, useParams, useNavigate, useLocation} from 'react-router-dom';
function App() {
  return (
    <>

        <NavigationBar/>
        <DriverRegister/>
    {/* <Routes>
      <Route path="/" element={<App/>}></Route> 
      <Route path='admin' element={<AdminLogin/>}></Route> 
      <Route path='/driverRegister' element={<DriverRegister/>}></Route> 
      <Route path='*' element={<PageNotFound/>}></Route> 
      <Route path="/driverLogin" element={<DriverLogin/>}></Route>
      <Route path="/user/Login" element={<UserLogin/>}></Route>
      <Route path="/user/Registration" element={<UserRegistration/>} />
</Routes> 
      <Link to="/">Home</Link> <br/>
      <Link to="/userLogin">user</Link> <br/>
      <Link to="/about">about</Link> <br/>
      <Link to="/login/admin">login</Link> <br/>       */}
      

   </>
  );
}

export default App;