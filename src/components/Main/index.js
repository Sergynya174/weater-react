import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../image/search.png";
import { getWeather } from "../../store/slices/currentWeatherSlice";
import Temp from "../../image/temp.png";
import Error from "../../image/NotFound.png";
import { WeatherTypes } from "../../utils/utils";

export const Main = () => {
  const [text, setText] = useState("");
  const [showWeather, setShowWeather] = useState(null);
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.currentWeatherSlice.weather);

  const changeText = (evt) => {
    setText(evt.target.value);
  };

  const fetchWeater = () => {
    if (text !== "") {
      dispatch(getWeather(text));
      setShowWeather(
        WeatherTypes.filter((item) => item?.type === weather?.weather[0]?.main)
      );
    }
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      fetchWeater();
      setShowWeather(
        WeatherTypes.filter((item) => item?.type === weather?.weather[0]?.main)
      );
    }
  };

  useEffect(() => {
    setShowWeather(
      WeatherTypes.filter((item) => item?.type === weather?.weather[0]?.main)
    );
  }, [weather]);

  console.log(showWeather);

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
        {weather !== null ? (
          <div className="text-center flex flex-col gap-6 mt-10">
            <p className="text-xl font-semibold">
              {weather
                ? weather?.name + "," + weather?.sys?.country
                : "Not Found"}
            </p>
            <img
              className="w-52 mx-auto"
              src={weather ? showWeather[0]?.img : Error}
              alt="..."
            />
            <h3 className="text-2xl font-bold text-zinc-800">
              {weather?.weather[0]?.main}
            </h3>
            <>
              {weather ? (
                <div className="flex justify-center">
                  <img src={Temp} alt="..." className="h-9 mt-1" />
                  <h2 className="text-4xl font-extrabold">
                    {Math.floor(weather?.main?.temp)}&#176;C
                  </h2>
                </div>
              ) : (
                ""
              )}
            </>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
