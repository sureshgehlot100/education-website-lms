const Teams = require("../../models/team/team");

const addTeams = async (req, res) => {
    try {
        const TeamsData = req.body;

        if (req.file) {
            TeamsData.thumbnail = req.file.filename;
        }

        const data = new Teams(TeamsData);
        const response = await data.save();
        console.log(response);
        res.status(200).json({ message: 'Team added Successfully', data: response });

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "internal server error" });

    }

};
module.exports = addTeams;