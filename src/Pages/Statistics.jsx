import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
const Statistics = () => {
  const data = useLoaderData();
  //   const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  return (
    <div className="my-12 ">
      <h2 className="text-3xl font-bold mb-10">Statistics</h2>

      <div className="flex justify-center">
        <BarChart width={1000} height={400} data={data}>
          <XAxis dataKey="category" />
          <YAxis dataKey="price" />
          <Bar dataKey="price" barSize={30} fill="#9538E2" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
