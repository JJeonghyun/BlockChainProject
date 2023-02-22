import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ChartComponent = ({ txs }) => {
  return (
    <ChartBox>
      <div>Transaction In Chart</div>
      <LineChart
        width={1300}
        height={400}
        data={txs}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="blockNumber" />
        {/* 가로축 숫자 */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          name="Transactions"
          dataKey="nonce"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type={"monotone"}
          name="Height"
          dataKey="blockNumber"
          stroke="#82ca9d"
        />
      </LineChart>
    </ChartBox>
  );
};
export default ChartComponent;

const ChartBox = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px gray;
  & > div {
    width: 100%;
  }
  & > div:first-child {
    padding: 10px 50px;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
