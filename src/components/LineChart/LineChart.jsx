import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const mathStudentData = [
        { id: 1, name: "John", math: 85, physics: 78, accounting: 90 },
        { id: 2, name: "Alice", math: 92, physics: 87, accounting: 85 },
        { id: 3, name: "Michael", math: 78, physics: 75, accounting: 82 },
        { id: 4, name: "Emily", math: 89, physics: 84, accounting: 91 },
        { id: 5, name: "James", math: 95, physics: 91, accounting: 88 },
        { id: 6, name: "Sophia", math: 84, physics: 79, accounting: 93 },
        { id: 7, name: "Daniel", math: 91, physics: 88, accounting: 89 },
        { id: 8, name: "Olivia", math: 88, physics: 83, accounting: 85 },
        { id: 9, name: "Matthew", math: 83, physics: 80, accounting: 87 },
        { id: 10, name: "Emma", math: 90, physics: 86, accounting: 92 },
    ];

    return (
        <div className='ml-20' >
            <LChart width={500} height={400} data={mathStudentData}>

                <Line  dataKey={"math"} stroke='red'></Line>
                <Line dataKey={"physics"} stroke='blue'></Line>
                <Line dataKey={"accounting"} stroke='purple'></Line>
                
            </LChart>
        </div>
    );
};

export default LineChart;