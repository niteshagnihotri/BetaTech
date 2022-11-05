import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import DriverLogin from "./components/DriverLogin/DriverLogin";
import DriverRegister from "./components/DriverRegister/DriverRegister";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UserComplaints from "./components/UserComplaints/UserComplaints";
import UserLogin from "./components/UserLogin/UserLogin";
import UserRegister from "./components/UserRegister/UserRegister";
import Dashboard from "./components/UserDashboard/Dashboard";
import ComplaintsHistory from "./components/ComplaintsHistory/ComplaintsHistory";
import DriverDashboard from "./components/DriverDashboard/DriverDashboard";
import DriverAssignTask from "./components/DriverAssignTask/DriverAssignTask";

function App() {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user_register" element={<UserRegister />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/driver_register" element={<DriverRegister />} />
        <Route path="/driver_login" element={<DriverLogin />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/user_dashboard/" element={<Dashboard />} />
        <Route path="/user_dashboard/user_comp" element={<UserComplaints />} />
        <Route path="/user_dashboard/comp_history" element={<ComplaintsHistory />} />
        <Route path="/driver_dashboard" element={<DriverDashboard />} />
        <Route path="/driver_dashboard/driver_task" element={<DriverAssignTask />} />

      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
