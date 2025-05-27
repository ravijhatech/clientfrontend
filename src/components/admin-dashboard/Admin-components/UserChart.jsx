import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample user data — customize this with real data
const data = [
  { month: "Jan", users: 30 },
  { month: "Feb", users: 45 },
  { month: "Mar", users: 60 },
  { month: "Apr", users: 40 },
  { month: "May", users: 75 },
  { month: "Jun", users: 50 },
  { month: "Jul", users: 65 },
  { month: "Aug", users: 70 },
  { month: "Sep", users: 55 },
  { month: "Oct", users: 80 },
  { month: "Nov", users: 62 },
  { month: "Dec", users: 90 },
];

const UserChart = () => {
  return (
    <div className="p-4 w-full ">
      <h3 className="text-lg font-semibold text-gray-800  dark:text-white mb-4">
        Users This Year (35)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;
