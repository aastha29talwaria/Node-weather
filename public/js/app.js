fetch("http://localhost:3000/weather?lat=12&long=34").then((data)=>{
    data.json().then((data)=>{
        console.log("hi")
        console.log("data", data);
    })
})

