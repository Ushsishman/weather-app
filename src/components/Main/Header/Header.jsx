/* eslint-disable react/prop-types */
{
  /* NAME OF LOCATION AND LOCATION'S WEATHER  */
}
const Header = ({ data }) => {
  return (
    <div className="flex flex-row justify-between items-center py-9 px-7">
      <div className="text-left">
        <p className="font-medium text-xl">
          {data.location ? data.location.name : <span>-</span>}
        </p>
      </div>
      <div className="flex items-center">
        {data.current ? (
          <div className="flex flex-col items-center justify-center">
            <img
              className="bg-slate-100 w-12 rounded-full"
              alt="weather icon"
              src={data.current.condition.icon}
            />
            <p className="font-semibold text-base">
              {data.current.condition.text}
            </p>
          </div>
        ) : (
          <span>-</span>
        )}
      </div>
    </div>
  );
};

export default Header;
