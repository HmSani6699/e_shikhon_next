import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVidoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  useEffect(() => {
    axios.post(`${process.env.NEXT_PUblIC_API_URL}getVdoCipherOTP`, {
      videoId: videoUrl,
    });
  });

  return (
    <div>
      <h2>Course player</h2>
    </div>
  );
};

export default CoursePlayer;
