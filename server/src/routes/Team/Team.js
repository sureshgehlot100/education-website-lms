const express = require('express');
const TeamsMulterFile = require('../../middleware/Teams/teamsMulter');
const { addTeams, deleteSingleTeams, readteams, readSingleTeams, updateTeam } = require('../../controller/controllers');




const TeamsRoutes = express.Router();

TeamsRoutes.post('/add_teams', TeamsMulterFile, addTeams);
TeamsRoutes.get('/read_teams', readteams);
TeamsRoutes.delete('/delete_single_teams/:_id', deleteSingleTeams);
TeamsRoutes.get('/fetch_team_with_id/:_id',readSingleTeams);
TeamsRoutes.post('/update_team/:_id',TeamsMulterFile,updateTeam);




module.exports = TeamsRoutes;

