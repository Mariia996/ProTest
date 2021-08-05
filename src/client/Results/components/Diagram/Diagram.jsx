import React from "react";
import { PieChart, Pie, Cell} from "recharts";


const Diagram = ({ answer, total }) => {
  const data = [
  { name: "Group A", value:  total},
  { name: "Group B", value: answer},
];

const COLORS = ["#FF6B01", "#D7D7D7"];

  return (
      <PieChart width={185} height={185} >
        <Pie
        data={data}
        labelLine={false}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
       </Pie>
      </PieChart>  
  )  
}

export default Diagram
