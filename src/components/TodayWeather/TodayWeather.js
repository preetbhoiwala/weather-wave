import { Grid } from '@mui/material';
import React from 'react';
import AirConditions from './AirConditions/AirConditions';
import DailyForecast from './Forecast/DailyForecast';
import Details from './Details/Details';

const TodayWeather = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  const today = new Date().toISOString().split("T")[0];

  let forecastList = [];

  if (!noDataProvided && data?.list) {
    forecastList = data.list.filter(item =>
      item.dt_txt.startsWith(today)
    );

    if (forecastList.length === 0) {
      forecastList = data.list.slice(0, 5);
    }
  }

  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
      <Details data={data} />
      <AirConditions data={data} />
      <DailyForecast data={data} forecastList={forecastList} />
    </Grid>
  );
};

export default TodayWeather;
