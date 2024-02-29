"use client";
import React from "react";
import AdminSidebar from "../../component/Admin/Sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import CoursesAnalutics from "../../component/Admin/Analytics/CoursesAnalutics";
import DashboardHero from "@/app/component/Admin/DashboardHero";

type Props = {};

const page = () => {
  return (
    <div>
      <Heading
        title="e-shikhon - Admin"
        description="admin"
        keywords="Programing"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/2">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
          <CoursesAnalutics />
        </div>
      </div>
    </div>
  );
};

export default page;
