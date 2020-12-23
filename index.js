const mongoose = require('mongoose')
const csv = require('csvtojson')
const movie = require('./model/movies')

const main = async()=>{
    const jsonArray=await csv().fromFile('movies.csv');
    console.log(jsonArray);
    const connect = await mongoose.connect('mongodb://localhost:27017/movie-data', { useNewUrlParser: true, useUnifiedTopology: true});

    try{
        await movie.insertMany(jsonArray, (err, res) => {
            console.log('done!');
            connect.disconnect();
        })
    }

    catch(err){
        console.log(err);
    }
}

main();