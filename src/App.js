import { useState, useEffect } from "react";
import { Container, Stack } from "@mui/material";
import ReusableButton from "./Components/ReusableButton/ReusableButton";
import { getData, getOptions } from "./Components/utils/utils";
import Chart from './Components/Chart/Chart'


export default function App() {
  const years = [2021, 2022, 2023, 2024];
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);
  const [year, changeYear] = useState(2021);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    })
  }, []);

  useEffect(() => {
    if (data) {
      const options = getOptions(data, year);
      setOptions(options);
    }
  }, [year, data])

  return (
    <div className="App">
      <Container>
        <Stack spacing={4} direction="row">
          {years.map((year) => {
            return <ReusableButton buttonVariant="contained" buttonColor="success" buttonText={year} buttonSize="small" changeYear={changeYear} />
          })}
        </Stack>
      </Container>
      <Chart options={options} />
    </div>
  )
}
