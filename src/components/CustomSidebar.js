import { Sidebar } from "flowbite-react";
import React from "react";
import { HiDatabase, HiLockClosed, HiLogout, HiTable } from "react-icons/hi";
import { MdPeople } from "react-icons/md";

import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const CustomSidebar = () => {
  return (
      <div className="flex flex-row h-screen" >
        <Sidebar aria-label="Default sidebar example" >
          <Sidebar.Logo>
            <h1 className="logo text-[25px] text-blue-500">
              <strong>Job</strong>Search
            </h1>
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/dashboard/profile" icon={MdPeople}>
                Profile
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/form-data" icon={HiDatabase}>
                Form Data
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/list-job-vacancy" icon={HiTable}>
                List Job vacancy
              </Sidebar.Item>
              <Sidebar.Item href="/dashboard/change-password" icon={HiLockClosed}>
                Change Password
              </Sidebar.Item>
              <Sidebar.Item
                href="/"
                onClick={() => {
                  Cookies.remove("token");
                }}
                icon={HiLogout}
              >
                Sign Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <Outlet />
      </div>
  );
};

export default CustomSidebar;
