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
    axios
      .post(`${process.env.NEXT_PUblIC_API_URL}getVdoCipherOTP`, {
        videoId: videoUrl,
      })
      .then((res) => {
        setVidoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div style={{ padding: "41%|", position: "relative" }}>
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=Ub90iZXIOeUXH0Nv`}
          style={{
            border: "0",
            width: "90%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
