const express = require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv/config');
const bodyParser=require('body-parser');
const cors=require('cors');




// import Routes 
const postRoute=require('./routes/postRoute');
const userRoute=require('./routes/userRoute');

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/post',postRoute)
app.use('/user',userRoute)

// Routes
app.get('/',(req,res)=>{
res.send("Welcome home ");
});


// connect to DB 
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connected successfully with db");
})


// port to lisen S
const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`);
  });



// Help material
// // middleware
// app.use('/hi',()=>{
//     console.log("This is middleware running");
//     });
////routes
// app.get('/hi',(req,res)=>{
// res.send("This is posts");
// });

