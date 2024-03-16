const mongoose = require("mongoose");
let compass_url='mongodb://localhost:27017/studentdb';
let mongodb_url = 'mongodb+srv://salihakt:salihakt321srs@cluster0.nbgby7w.mongodb.net/data1?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongodb_url).then(()=>{
    console.log("DB CONNECTED  ");
})
.catch((err)=>{
    console.log(err);
});

