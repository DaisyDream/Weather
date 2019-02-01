var background = "";
var n = new Date();
var month = n.getMonth();

switch (month){
  case 0:
  case 11:
  case 1:
    background = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1N96OByGzgOaGD9aM7XfGlXU19qD6YGtpYnXqpWjDYboCZi7c";
    break;
  case 10:
  case 9:
  case 8:
    background = "http://media4.popsugar-assets.com/files/2014/09/22/040/n/1922507/7f748571f19e3caf_thumb_temp_cover_file32304521380236003.xxxlarge/i/Free-Desktop-Wallpapers-Fall.jpg";
    break;
    case 7:
  case 6:
  case 5:
    background = "http://saludactiva.info/wp-content/uploads/2014/09/FONDO-OCEANO.jpg";
    break;
  case 4:
  case 3:
  case 2:
    background = "http://1-background.com/images/spring/spring-flowers-background.jpg";
    break;    
}
     
document.body.background = background;

$.getJSON("http://ip-api.com/json/?callback=?", function(data) 
{
  var lat = data.lat;
  var lon = data.lon; 
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=5f3a20c72ab970efb7f91be749b86d8f", function(response)
     {
     
//convert unix date to string for sunrise/sunset times
var Morning = new Date();
Morning.setTime(response.sys.sunrise * 1000);
var sunrise = Morning.toLocaleTimeString();
var Evening = new Date();
Evening.setTime(response.sys.sunset * 1000);
var sunset = Evening.toLocaleTimeString();
     
     //farenheit and celcius
     var farenheit = (1.8*(response.main.temp - 273) + 32);
     farenheit = farenheit.toFixed(2);
     var celcius = response.main.temp - 273.15;
     celcius = celcius.toFixed(2);
     //display weather information
     
     $("#Faren").on("click",function(){
      $("#basic").html( response.name+"<br>"+ farenheit+"&degF<br>"+response.weather[0].description +"<br><img src='http://openweathermap.org/img/w/"+response.weather[0].icon+".png' width='100' style='background-color:#0040ff;'>");
     });
     
     $("#Cel").on("click",function(){
      $("#basic").html( response.name+"<br>"+ celcius+"&degC<br>"+response.weather[0].description +"<img src='http://openweathermap.org/img/w/"+response.weather[0].icon+".png' width='100'style='background-color:#0040ff;'>");
     });
     
     $("#sunrise").html("<img src='https://openclipart.org/image/2400px/svg_to_png/215006/1425029794.png'  width='100'>"+sunrise);
     $("#sunset").html("  <img src='https://openclipart.org/image/2400px/svg_to_png/215007/1425029996.png' width='100'>"+sunset);
     var degrees = response.wind.deg;
     $(".pointer").css('-ms-transform', 'rotate(' + degrees + 'deg)');
                $(".pointer").css('-webkit-transform', 'rotate(' + degrees  + 'deg)');
               $(".pointer").css('transform', 'rotate(' + degrees  + 'deg)');
                $(".pointer").css('-o-transform', 'rotate(' + degrees  + 'deg)');
                $(".pointer").css('-moz-transform', 'rotate(' + degrees  + 'deg)');

     $("#wind").html(response.wind.speed+" meters/second" );
   } );} ) ;
/*

 var $cboxphoto = $('.cboxPhoto');
                

response.main.humidity

response.main.temp --kelvin
response.name -- city name
response.sys.sunrise -- unix, UTC
response.sys.sunset -- unix, UTC
response.weather.0.description <-- description of weather
response.weather.0.icon = iconCode - http://openweathermap.org/img/w/{iconCode}.png
response.wind.deg -- wind direction
response.wind.speed -- meters per second

 <img class = "rose" src="https://openclipart.org/image/2400px/svg_to_png/247149/dual-compass-rose.png">

*/