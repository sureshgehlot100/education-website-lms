const Teams = require("../../models/team/team");

const deleteSingleTeams = async (req, res) => {
    try {
        const response = await Teams.findByIdAndDelete(req.params);
        
        if (!response) return res.status(404).json({ message: 'please provoide a valid course id' });

        res.status(200).json({ message: 'team deleted successfuly',data:response });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });

    }
};
module.exports = deleteSingleTeams;