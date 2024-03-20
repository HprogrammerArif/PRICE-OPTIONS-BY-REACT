import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {

  const studentsData = [
    { id: 1, name: "Alice", math_mark: 85, physics_mark: 78, chemistry_mark: 90 },
    { id: 2, name: "Bob", math_mark: 78, physics_mark: 75, chemistry_mark: 85 },
    { id: 3, name: "Charlie", math_mark: 92, physics_mark: 88, chemistry_mark: 94 },
    { id: 4, name: "David", math_mark: 65, physics_mark: 70, chemistry_mark: 60 },
    { id: 5, name: "Emma", math_mark: 80, physics_mark: 82, chemistry_mark: 75 },
    { id: 6, name: "Frank", math_mark: 88, physics_mark: 90, chemistry_mark: 85 },
    { id: 7, name: "Grace", math_mark: 72, physics_mark: 68, chemistry_mark: 70 },
    { id: 8, name: "Henry", math_mark: 70, physics_mark: 75, chemistry_mark: 68 },
    { id: 9, name: "Ivy", math_mark: 95, physics_mark: 92, chemistry_mark: 96 },
    { id: 10, name: "Jack", math_mark: 83, physics_mark: 85, chemistry_mark: 80 },
  ];
  

  return (
    <div>
         <LChart width={800} height={400} data={studentsData}>
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>

            <Line dataKey="math_mark" stroke='red'></Line>
            <Line dataKey="physics_mark" stroke='yellow'></Line>
            <Line dataKey="chemistry_mark" stroke='purple'></Line>
         </LChart>
  </div>
  );
};

export default LineChart;
