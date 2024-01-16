const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    continent: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    attempts: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;