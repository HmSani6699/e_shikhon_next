import React, { FC } from "react";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  hanleCourseCreate: any;
};

const CoursePreview: FC<Props> = ({
  courseData,
  hanleCourseCreate,
  active,
  setActive,
}) => {
  return <div></div>;
};

export default CoursePreview;
