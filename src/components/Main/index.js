import { useState } from "react";
import Search from "../../image/search.png";
import { getCurrentWeater } from "../../utils/axios";

export const Main = () => {
  const [text, setText] = useState("");

  const changeText = (evt) => {
    setText(evt.target.value);
  };

  const fetchWeater = () => {
    getCurrentWeater(text);
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      fetchWeater();
    }
  };

  return (
    <div className="bg-gray-800 grid h-screen place-content-center place-items-centers">
      <div className="bg-white w-96 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <input
            value={text}
            onKeyUp={handleKeyPress}
            onChange={changeText}
            type="text"
            placeholder="Enter Your Location"
            className="text-xl border-b p-1 border-gray-200 font-semibold uppercase flex-1 outline-0"
          />
          <button onClick={fetchWeater}>
            <img src={Search} alt="search" className="w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};
