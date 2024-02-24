import React, { FC } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  return (
    <div>
      <h2>Course player</h2>
    </div>
  );
};

export default CoursePlayer;
