import React, { FC } from "react";


type Props = {
  courseInfo: any;
  setCourseInfo(courseInfo: any)=> void;
  active: number;
  setActive = (active: number) => void;
};

const CourseInformation: FC<Props> = ({ courseInfo, setCourseInfo, active, setActive }:Props) => {
  return <div></div>;
};

export default CourseInformation;
