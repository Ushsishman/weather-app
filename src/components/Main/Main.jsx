/* eslint-disable react/prop-types */
{
  /* IMPORTING PARTS OF CARD */
}
import Details from "./Details/Details";
import Header from "./Header/Header";

const Main = ({ data }) => {
  return (
    <div className="h-72 w-[28rem] m-auto mt-10 text-white bg-slate-800 rounded-lg relative">
      <Header data={data} />
      <Details data={data} />
    </div>
  );
};
export default Main;
