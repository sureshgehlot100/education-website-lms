const mongoose = require('mongoose');

const addTeamSchema = new mongoose.Schema({
    teamsmembername: String,
    teamsSubject: String,
    thumbnail: String,
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }

});

const Teams =mongoose.model('teams',addTeamSchema);

module.exports = Teams;