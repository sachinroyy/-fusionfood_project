
import React from "react";
import openmp4 from "../../assets/open.mp4";
import bites from "../../assets/bites.mp4";
import phone from "../../assets/phone.mp4";
import Chat from "../chatbot/chat";

const Globe = React.memo(() => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto p-4 gap-6">
      {/* Left Video */}
      <video
        className="rounded-lg w-full max-w-xs md:w-72 h-auto md:h-40 object-cover"
        src={openmp4}
        autoPlay
        muted
        loop
      ></video>

      {/* Phone Video */}
      <video
        className="rounded-lg w-full max-w-md h-auto md:h-96 object-cover "
        src={phone}
        autoPlay
        muted
        loop
      ></video>

      {/* Right Video */}
      <video
        className="rounded-lg w-full max-w-xs md:w-72 h-auto md:h-40 object-cover"
        src={bites}
        autoPlay
        muted
        loop
      ></video>

      {/* Chatbot */}
      <Chat />
    </div>
  );
});

export default Globe;
