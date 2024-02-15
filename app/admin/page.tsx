"use client";
import React, { FC } from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../component/Admin/Sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";

type Props = {};

const page: FC<Props> = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title={`e-Shikhon - Admin`}
          description="Learning"
          keywords="React,Fron end ,"
        />

        <div className="flex h-[200vh] ">
          <div className="1500px:w-[16%] w-1/2">
            <AdminSidebar />
          </div>
          <div className="w[85%]"></div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
