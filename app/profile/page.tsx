"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import Header from "../component/Header";
import Protected from "../hooks/useProtected";

import Profile from "../component/Profile/Profile";
import { useSelector } from "react-redux";

type Props = {};

const page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile - e-Shikhon`}
          description="Learning"
          keywords="React,Fron end ,"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
      </Protected>
    </div>
  );
};

export default page;
