const express = require("express");
const app = express();

//Parsing bodies, parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
//Cors
const cors = require("cors");
//Use cors
app.use(cors());

app.get('/sample', (req,res)=>{
    res.send("sample")
})
app.get('/samplerex', (req,res)=>{
    res.send("sample")
})

//Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});