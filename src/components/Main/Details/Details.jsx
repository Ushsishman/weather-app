/* eslint-disable react/prop-types */
{
  /* IMPORTING EXTRA DETAILS TABLE */
}
import Table from "./Table/Table";
{
  /* CURRENT TEMP AND DETAILS TABLE */
}
const Details = ({ data }) => {
  return (
    <div className="absolute inset-x-7 bottom-8">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-5xl font-bold">
            {data.current ? <p>{data.current.temp_c} °C</p> : <span>-</span>}
          </p>
        </div>
        <Table data={data} />
      </div>
    </div>
  );
};

export default Details;
