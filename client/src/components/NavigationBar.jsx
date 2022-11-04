import React from "react";
import {Routes,Route,Link, parsePath, useParams, useNavigate, useLocation} from 'react-router-dom';


const NavigationBar=()=>{
    return(
    
<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple-500 mb-3">
  <div classNameName="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
        Waste Management
      </a>
      <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onclick="toggleNavbar('example-collapse-navbar')">
        <i className="fas fa-bars"></i>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center hidden" id="example-collapse-navbar">
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Admin</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Driver</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/userLogin">
            <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">user</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

//   function toggleNavbar(collapseID){
//     document.getElementById(collapseID).classList.toggle("hidden");
//     document.getElementById(collapseID).classList.toggle("flex");
//   }
    )
}
export default NavigationBar;