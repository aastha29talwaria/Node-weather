 var request =  require("request");

 const forecast = function( latitude, longitude, callback){
     let url = "https://api.darksky.net/forecast/83d3d3e332963fa4320af3e6ef250bd2/"+longitude+","+latitude;

     request({url, json:true},(error, response)=>{
          if(error){
              callback("Unable to connect to the forecast service! ", undefined);
          }
          else if(!response.body.currently){
              callback("Unable to get current weather info! ", undefined);
          }
          else{
              callback(undefined, response.body.currently);
          }
     } )
 }

 module.exports = forecast;