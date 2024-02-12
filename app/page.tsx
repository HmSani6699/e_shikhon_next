"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./component/Header";
import Hero from "./component/Route/Hero";
interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading
        title="e-Shikhon"
        description="Learning"
        keywords="React,Fron end ,"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      <Hero />
    </div>
  );
};

export default Page;
