import React, { FunctionComponent } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import ClearIcon from './Clear.svg';
import HailIcon from './Hail.svg';
import HeavyCloudIcon from './HeavyCloud.svg';
import HeavyRainIcon from './HeavyRain.svg';
import LightCloudIcon from './LightCloud.svg';
import LightRainIcon from './LightCloud.svg';
import ShowersIcon from './Showers.svg';
import SleetIcon from './Sleet.svg';
import SnowIcon from './Snowing.svg';
import ThunderstormIcon from './Thunderstorm.svg';
import Weather from '../../interfaces/Weather';
import WeatherState from '../../constants/WeatherState';
import * as V from '../../styles/variables';

type WeatherCardProps = {
  weather: Weather
};

const Card = styled.div`
  display: flex;
  border: 1px solid;
  border-color: ${V.Color.blue};
  border-radius: 2px;
  flex-direction: column;
  height: 350px;
  padding: 10px;
  width: 200px;
`;

const WeekDayLabel = styled.span`
  align-items: center;
  display: flex;
  font-size: 20px;
  height: 15%;
  justify-content: center;
  text-transform: capitalize;
`;

const WeatherIcon = styled.img.attrs({
  alt: 'Weather icon'
})`
  height: 20%;
`;

const Temperature = styled.span`
  align-items: center;
  display: flex;
  font-size: 35px;
  font-weight: 900;
  height: 20%;
  justify-content: center;
`;

const DividedContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 22.5%;
`;

const MinorWeatherInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 16px;
  justify-content: center;
  text-align:center;
`;

const WeatherInfoLabel = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const getWeatherIconSrc = (weather: Weather) => {

  switch (weather.weather_state_abbr) {
    case WeatherState.clear:
      return ClearIcon;

    case WeatherState.hail:
      return HailIcon;

    case WeatherState.heavyCloud:
      return HeavyCloudIcon;

    case WeatherState.heavyRain:
      return HeavyRainIcon;

    case WeatherState.lightCloud:
      return LightCloudIcon;

    case WeatherState.lightRain:
      return LightRainIcon;

    case WeatherState.showers:
      return ShowersIcon;

    case WeatherState.sleet:
      return SleetIcon;

    case WeatherState.snow:
      return SnowIcon;

    case WeatherState.thunderstorm:
      return ThunderstormIcon;
  
    default:
      return '';
  }

};

const truncateTemperature = (value: number) => {
  return Math.trunc(value);
};

const getWeekDay = (date: string) => {
  return moment(date, 'YYYY-MM-DD').format('dddd');
};

const WeatherCard: FunctionComponent<WeatherCardProps> = ({ weather }) => {
  
  const icon = getWeatherIconSrc(weather);

  return (
    <Card>
      <WeekDayLabel>{getWeekDay(weather.applicable_date)}</WeekDayLabel>
      <WeatherIcon src={icon} />
      <Temperature>{truncateTemperature(weather.the_temp)}°</Temperature>
      <DividedContainer>
        <MinorWeatherInfo>
          <WeatherInfoLabel>min</WeatherInfoLabel>
            {truncateTemperature(weather.min_temp)}°
          </MinorWeatherInfo>
        <MinorWeatherInfo>
          <WeatherInfoLabel>max</WeatherInfoLabel>
          {truncateTemperature(weather.max_temp)}°
        </MinorWeatherInfo>
      </DividedContainer>
      <DividedContainer>
        <MinorWeatherInfo>
          <WeatherInfoLabel>wind speed</WeatherInfoLabel>
          {truncateTemperature(weather.wind_speed)}
        </MinorWeatherInfo>
        <MinorWeatherInfo>
          <WeatherInfoLabel>wind dir</WeatherInfoLabel>
          {weather.wind_direction_compass}
        </MinorWeatherInfo>  
      </DividedContainer>
    </Card>
  );
}

export default WeatherCard;