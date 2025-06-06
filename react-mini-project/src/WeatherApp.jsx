import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Disneyland",
        feelslike: 26.4,
        humidity: 28,
        temp: 27.09,
        tempMax: 27.09,
        tempMin: 27.09,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style = {{textAlign: "center"}}>
            <h2 >Weather App by Nirmal</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}