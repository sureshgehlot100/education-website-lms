const express = require('express');
const path = require('path');
const allRoutes = require('./src/app');
const cors = require('cors');
const {registerAdmin} = require('./src/controller/controllers');

const app = express();
app.use(express.json());
app.use(cors());
const corsConfig = {
    origin: "*",
    credential:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}
app.use(cors(corsConfig));
app.use('/uploads',express.static(path.join(__dirname,'src','uploads')));

app.use(allRoutes);

registerAdmin();

// app.listen(process.env.PORT,()=>{
//     console.log(`Server is running on port ${process.env.PORT}`)
// });
module.exports = app;