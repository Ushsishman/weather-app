/* eslint-disable react/prop-types */
import axios from "axios";
import API_KEY from "../../../apikey";

const Input = ({ setData, setInputVal, inputVal }) => {
  {
    /* API OPTIONS FOR GET REQUEST */
  }
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: inputVal },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  {
    /* API CALL */
  }
  const submitHandler = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      alert("Try Another City/Country !");
    }
  };

  {
    /* SEARCH INPUT AND BUTTON */
  }
  return (
    <>
      <input
        className="pl-2 pr-28 py-2 mr-1 border-solid border-2 border-stone-700 rounded-md"
        type="text"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button
        onClick={submitHandler}
        className="px-6 py-2 ml-1 rounded-md bg-stone-700 text-white text-lg">
        Search
      </button>
    </>
  );
};
export default Input;
