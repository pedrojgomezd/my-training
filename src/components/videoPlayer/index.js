"use client";
import { useState } from "react";

export const VideoPlayer = ({ videos }) => {
  const [videoSelect, setVideoSelect] = useState(0);

  const nextVideo = () => {
    const maxVideo = videos.length - 1;

    if (maxVideo === videoSelect) {
      setVideoSelect(0);
    } else {
      setVideoSelect(videoSelect + 1);
    }
  };

  const prevVideo = () => {
    if (videoSelect > 0) {
      setVideoSelect(videoSelect - 1);
    }
  };

  return (
    <div>
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${videos[videoSelect]}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between">
        <button className="bg-blue-500 p-2 text-white disabled:bg-slate-600" disabled={videoSelect === 0} onClick={prevVideo}>
          Anterior
        </button>
        <button className="bg-blue-500 p-2 text-white disabled:bg-slate-600" disabled={videos?.length === 0} onClick={nextVideo}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
