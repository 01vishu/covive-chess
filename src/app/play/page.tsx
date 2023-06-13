"use client";

import { useState } from "react";
import Modal from "../components/Modal";
import RoomModal from "./components/RoomModal";

type MODE = "ROOM" | "MULTIPLAYER" | "COMPUTER";
const Page = () => {
  const [mode, setMode] = useState<MODE>("ROOM");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {mode === "ROOM" ? <RoomModal /> : "This feature is coming soon"}
      </Modal>
      <div className="flex flex-col gap-8 items-center justify-center h-full w-full ">
        <h3 className="text-4xl underline underline-offset-4 font-bold tracking-widest">
          Player Mode
        </h3>
        <div className="flex flex-col gap-4 max-w-sm w-full m-4">
          <button
            className="bg-primary py-8 font-medium text-xl mx-2 rounded-md shadow-lg"
            onClick={() => {
              setIsOpen(true), setMode("ROOM");
            }}
          >
            Create a room
          </button>
          <button
            className="bg-gray py-8 font-medium text-xl mx-2 rounded-md shadow-lg"
            onClick={() => {
              setIsOpen(true), setMode("MULTIPLAYER");
            }}
          >
            Play with multiplayer
          </button>
          <button
            className="bg-black py-8 font-medium text-xl mx-2 rounded-md shadow-lg"
            onClick={() => {
              setIsOpen(true), setMode("COMPUTER");
            }}
          >
            Play with computer
          </button>
        </div>
        <div>
          <button className="absolute bottom-4 right-4  bg-primary py-4 px-8 font-medium text-xl rounded-full shadow-lg">
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
