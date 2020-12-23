const mongoose = require('mongoose');
const movieSchema = mongoose.Schema(
{
  name:"string",
  description:"string",
  genre:"string",
  image:"string",
  releaseDate:"number",
  rating:"number"
});
const model= mongoose.model('Movies',movieSchema);
module.exports = model;