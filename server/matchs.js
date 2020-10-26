const mongoose = require("mongoose");

const matchSchema = mongoose.Schema({
    
    _id: mongoose.Schema.ObjectId,
    
    userw: {
        type: String,
    },
    
    userb: {
        type: String,

    },

    room:{
        type:String,
    },

    wpoint: {
        type: Number,
    },
    bpoint: {
        type: Number,
    },
    wtime:{
        type: Number,
    },
    btime:{
        type:Number
    },
    winner:{
        type:Number
    }


});

module.exports = mongoose.model("matchs", matchSchema);
