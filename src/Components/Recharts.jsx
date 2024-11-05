/* eslint-disable react/prop-types */
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const Recharts = ({ item }) => {
  const { product_title, price } = item || {};
  return (
    <div>
      <LineChart width={1000} height={300} data={item}>
        <Line type="monotone" dataKey="price" stroke="#9538E2" />
        <CartesianGrid stroke="#9538E2" />
        <XAxis dataKey={"price"} />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Recharts;
