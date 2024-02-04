import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { GlobalJobContext } from "../context/GlobalJobContext";
import { Outlet } from "react-router-dom";

const CustomNavbar = () => {
  let { navigate } = useContext(GlobalJobContext);

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <h1 className="logo text-[25px] text-blue-500">
            <strong>Job</strong>Search
          </h1>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/job-vacancy">Job Vacancy</Navbar.Link>
          <Navbar.Link href="/about">About Us</Navbar.Link>
          <Navbar.Link href="/register">Register</Navbar.Link>
          {Cookies.get("token") != undefined || Cookies.get("token") === "" ? (
            <Navbar.Link
              onClick={() => {
                Cookies.remove("token");
                navigate("/");
              }}
            >
              Logout
            </Navbar.Link>
          ) : (
            <Navbar.Link href="/login">Login</Navbar.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default CustomNavbar;
