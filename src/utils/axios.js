import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
export const getCurrentWeater = async (city) => {
  await axios
    .get(`${baseUrl}forecast?q=${city}&appid=${apiKey}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
