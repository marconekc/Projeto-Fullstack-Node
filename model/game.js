const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema ({
    name: {
        type: String
    },
    description: {
        type: String
    },
    year: {
        type: Number
    },
    img: {
        type: String
    }

},{
    collection: 'game'
});

module.exports = mongoose.model('Game', Game);