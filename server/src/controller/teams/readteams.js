const Teams = require("../../models/team/team");

const readteams = async(req,res)=>{
    try {
         const response = await Teams.find();
         const filePath = `${req.protocol}://${req.get('host')}/uploads/`;
        res.status(200).json({message:'data feched successfully',data: response, filePath });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'internal server error'});
        
    }
};
module.exports = readteams;