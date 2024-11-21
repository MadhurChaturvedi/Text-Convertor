import React, { useState } from "react";
import Header from "./components/Header";
import TextBox from "./components/TextBox";

export default function App() {
  const header = {
    img: "https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-1701527337098cr1i6.png",
  };

  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <div
      className={`h-screen ${
        Mode === "dark" ? "bg-blue-950" : "bg-white"
      } m-auto flex justify-around md:px-40 xl:px-40`}
    >
      <div
        className={`containe mx-autor ${
          Mode === "dark" ? "bg-blue-950" : "bg-white"
        }  `}
      >
        <Header img={header.img} mode={Mode} toggleMode={toggleMode} />
        <TextBox mode={Mode} toggleMode={toggleMode} />
      </div>
    </div>
  );
}
