const express = require("express");
const app = express();

const users = [{
    name: "mickey",
    kidneys: [{
        healthy: false,
    }],
}]

//middleware
app.use(express.json());

// query parameter takes input in get method in URL using "?"
app.get("/", (req, res)=>{
    const mickeyKidney = users[0].kidneys;
    const numberOfKidneys = mickeyKidney.length;
    let numberOFHealthyKidney = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(mickeyKidney[i].healthy) numberOFHealthyKidney++;
    }
    const numberOFunHealthyKidney = numberOfKidneys - numberOFHealthyKidney;
    res.json({
        numberOfKidneys, 
        numberOFHealthyKidney,
        numberOFunHealthyKidney,
    })
})

// adding new kidney
app.post("/", (req, res)=>{
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// updating kidneys
app.put("/", (req, res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})


//removing all unhealthy kidney
app.delete("/", (req, res)=>{

    // if there are no unhealthy kidneys then return some status code else do the following operation
    let atLeastOneUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy) atLeastOneUnhealthyKidney = true;
    }
    if(atLeastOneUnhealthyKidney){
        const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) newKidneys.push({
                healthy: true
            })
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done!"});
    }
    else res.status(411).json({
            msg: "you have no unhealthy kidneys"
        });

})
app.listen(3000);