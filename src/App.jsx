import React from "react";
import Description from "./components/description";

export default function App() {
  return (
    <div className="relative h-screen flex items-center justify-center ">
      {/* carte */}
      <div className="group relative flex justify-end h-[400] rounded-2xl overflow-hidden cursor-pointer">
        <img src="/afrik.jfif" alt="afrik" className="size-100" />

        <Description />
      </div>
    </div>
  );
}
