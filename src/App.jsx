import { useState } from "react";
{
  /* IMPORTING LAYOUT AND COMPONENTS */
}
import Header from "./layouts/Header/Header";
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";

function App() {
  {
    /* SETTING INPUT QUERY AND DATA FOR API */
  }
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  return (
    <div className="h-screen w-full bg-slate-100 text-center">
      <Header />
      <Input setData={setData} inputVal={inputVal} setInputVal={setInputVal} />
      <Main data={data} />
    </div>
  );
}

export default App;
