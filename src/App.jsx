import React from "react";
import Description from "./components/description";

export default function App() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center pt-60">
        <img src="/afrik.jfif" alt="afrik" className="rounded-2xl size-90" />
        <Description />
      </div>
    </div>
  );
}
