import { Action } from "@reduxjs/toolkit";
import React, { FC } from "react";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const CourseOptions: FC<Props> = ({ active, setActive }) => {
  const onptions = [
    "Course Information",
    "Course Option",
    "Course Content",
    "Course Preview",
  ];
    return <div>{onptions.map((option: any, index: number) => (
        
        
    ))}</div>;
};

export default CourseOptions;
