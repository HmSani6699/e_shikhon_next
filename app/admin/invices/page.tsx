"use client";
import React from "react";
import AdminSidebar from "../../component/Admin/Sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import DashboardHero from "@/app/component/Admin/DashboardHero";
import AllInvoices from "@/app/component/Admin/Order/AllInvoices";

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
          <AllInvoices />
        </div>
      </div>
    </div>
  );
};

export default page;
