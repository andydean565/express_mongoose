var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true},
  }
);

// Virtual for book's URL
GenreSchema.virtual('url').get(function () {
  return '/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema, 'genres');