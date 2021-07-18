const mongoose = require('mongoose');

const HomeShema = new mongoose.Schema({
    titulo: {type: String, required:true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeShema)

module.exports = HomeModel;