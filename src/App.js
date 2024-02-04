import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobVacancy from "./pages/JobVacancy";
import "./index.css";
import GlobalProvider from "./context/GlobalJobContext";
import CustomFooter from "./components/CustomFooter";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomSidebar from "./components/CustomSidebar";
import DashboardJobList from "./pages/DashboardJobList";
import CustomFormData from "./components/CustomFormData";
import ChangePassword from "./pages/ChangePassword";
import Profile from "./pages/Profile";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <>
    <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route element={<CustomNavbar />}>
              <Route path="/" element={<JobVacancy />} />
              <Route path="/job-vacancy" element={<JobVacancy />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/job-detail/:id" element={<JobDetail />} />
            </Route>
            <Route element={<CustomSidebar />}>
              <Route path="/dashboard" element={<DashboardJobList />} />
              <Route path="/dashboard/list-job-vacancy" element={<DashboardJobList />} />
              <Route path="/dashboard/form-data" element={<CustomFormData />} />
              <Route path="/dashboard/change-password" element={<ChangePassword />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
      <CustomFooter />
    </>
      
  );
}

export default App;
