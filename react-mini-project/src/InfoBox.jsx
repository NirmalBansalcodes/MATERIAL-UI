import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    // const INIT_URL = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7EW6BB4OScjLEnDoSwF6ZafbMcqiO44tGw&s";
    const COLD_URL = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/09/cold_weather_GettyImages107191741_Header-1024x575.jpg";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvo8-glVUupanHoApWrSEDJ0EhqJbyLP_y-w&s";


    return(
        <div className="InfoBox">
            <h2>Weatherinfo - {info.weather}</h2>
          <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
        info.humidity > 80 
        ? RAIN_URL 
        : info.temp > 20 
        ? HOT_URL 
        : COLD_URL
      }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city } {
        info.humidity > 80 
        ? <ThunderstormIcon style={{color:'darkblue'}}/> 
        : info.temp > 20 
        ? <SunnyIcon style={{color:'gold'}}/> 
        : <AcUnitIcon style={{color:'silver'}}/>
      }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp= {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            The weather can be described as <i>{info.weather}</i> and Feels Like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
            </Card>
          </div>
        </div>
    )
}