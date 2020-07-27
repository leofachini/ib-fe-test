import Weather from './Weather';

export default interface WeatherResponse {
    latt_long: string,
    location_type: 'City' | 'Region' | 'State' | 'Province' | 'Country' | 'Continent',
    sun_rise: number,
    sun_set: number,
    time: number,
    timezone_name: string,
    title: string,
    consolidated_weather: Array<Weather>
};