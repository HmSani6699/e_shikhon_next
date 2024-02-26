"use client";
import React from "react";
import CreateCourse from "../../../component/Admin/Course/CreateCourse";
import Heading from "../../../../app/utils/Heading";
import AdminSidebar from "../../../component/Admin/Sidebar/AdminSidebar";
import DashboardHeader from "../../../../app/component/Admin/DashboardHeader";
import EditCourse from "../../../component/Admin/Course/EditCourse";

type Props = {};

const page = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <Heading
        title="e-shikhon - Admin"
        description="admin"
        keywords="Programing"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <EditCourse id={id} />
        </div>
      </div>
    </div>
  );
};

export default page;
