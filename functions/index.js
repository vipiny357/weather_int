const axios = require("axios");
const functions = require("firebase-functions");
const api_key ="c3342f37560e54fb3b26bd3b1c49df54";

exports.weather = functions.https.onRequest((request, response) => {
    var lat = request.query.lat;
    var lng = request.query.lng; 
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid="+api_key+"")
    .then(apiResponse => {
        response.send(`<pre><code>${JSON.stringify(apiResponse.data, null, "\t")}</code></pre>`);
    })
    .catch(error => {
        console.log(error);
    });
});