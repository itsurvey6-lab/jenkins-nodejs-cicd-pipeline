import express from "express";

const app = express()

app.get("/", (req, res) => {

    res.send("Jenkins CI/CD Pipeline Working!");
    
});


app.listen(3000, () => {
    console.log("server is running on post 3000")
});


export default app;
