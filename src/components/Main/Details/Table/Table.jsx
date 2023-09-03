/* eslint-disable react/prop-types */
{
  /* EXTRA DETAILS */
}
const Table = ({ data }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="text-left  w-28">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left">Feels Like:</td>
          <td className="text-right">
            {data.current ? (
              <p>{data.current.feelslike_c} °C</p>
            ) : (
              <span>-</span>
            )}
          </td>
        </tr>
        <tr>
          <td className="text-left">Humidity:</td>
          <td className="text-right">
            {data.current ? <p>{data.current.humidity} %</p> : <span>-</span>}
          </td>
        </tr>
        <tr>
          <td className="text-left">Pressure:</td>
          <td className="text-right">
            {data.current ? (
              <p>{data.current.pressure_mb} hPs</p>
            ) : (
              <span>-</span>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
