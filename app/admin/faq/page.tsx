"use client";

import AdminProtected from "../../../app/hooks/adminProtected";
import Heading from "../../../app/utils/Heading";
import AdminSidebar from "../../component/Admin/Sidebar/AdminSidebar";
import DashboardHero from "../../../app/component/Admin/DashboardHero";
import EditFaq from "../../component/Admin/Customization/EditFaq";

type Props = {};

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="e-shikhon"
          description="learning weeb"
          keywords="MERN"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/2">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditFaq />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
