const Video = require("../../models/video/video");
const fs = require('fs');
const path = require('path');

const updateVideo = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        if(req.file){
            data.videoFile = req.file.filename;

            const {videoFile} = await Video.findOne(req.params);

            if(videoFile){
            const oldfilepath = path.join('src', 'uploads', videoFile);
            if(fs.existsSync(oldfilepath)){
                fs.unlinkSync(oldfilepath);
            }
        }
            
        };

    const response = await Video.findOneAndUpdate(
        req.params,
        {
            $set: data
        }
    );
    res.status(200).json({message: 'data updated successfully', data: response});
    }catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
    
}
module.exports = updateVideo;