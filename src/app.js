const path = require("path");

const hbs = require('hbs')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000 ; 
const forecast = require("./utils/forecast.js")

//Define paths for express config
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(path.join(__dirname, "../public")));

//setUp handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);
 
app.get("", (req, res) => { 
    res.render('index', {
        title:"WEATHER",
        name : "Aastha"
    });//name of the template of the hbs
});

app.get('/about', (req, res)=>{
    res.render('about', {
        title:"ABOUT",
        name : "Aastha"
    });
})

app.get("/weather", (req, res)=>{
    forecast( req.query.lat, req.query.long, (error, response)=>{
        if(error){
            res.send({
                status: false,
                error:error,
                data: null
            })
        } else {
            res.send({
                status : true,
                data: response,
                error: null
            })
        }
    })
})
app.get("/help", (req, res) => { 
    res.send("Hello express help");
});


app.get("/weather", (req, res) => { 
    res.senf
    res.send("Hello express weather");
});

app.get("*", (req, res)=>{
    res.send("refrjneghthytjnh")
})
app.listen(port, ()=>{
    console.log("App is listening you on port "+port+" !");
})