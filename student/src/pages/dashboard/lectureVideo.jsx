import React, { useEffect, useState } from 'react'
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import axios from 'axios';

function Video() {
    const [videoData, setVideoData] = useState([]);
    const [filePath, setFilePath] = useState('');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleFetchVideo = async () => {
        try {
            const response = await axios.get('http://localhost:5500/videos/read_video');
            if (response.status !== 200) {
                alert('Something went wrong');
                return;
            }
            setFilePath(response.data.filePath);
            setVideoData(response.data.data);
            if (response.data.data.length > 0) {
                setSelectedVideo(response.data.data[0]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetchVideo();
    }, []);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div className="mx-auto my-16 flex max-w-screen-xl gap-8">
            {/* Main Video */}
            <div className="w-3/4">
                {selectedVideo && (
                    <Card className="bg-white rounded-lg shadow-md">
                        <CardHeader color="blue-gray" className="relative h-full">
                            <video
                                key={selectedVideo.videoFile} 
                                width="100%"
                                height="100%"
                                controls
                                autoPlay // Optional: auto-play when a new video is selected
                            >
                                <source src={filePath + selectedVideo.videoFile} type="video/mp4" />
                            </video>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {selectedVideo.coursecat.coursename}
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {selectedVideo.coursecat.courseprice}
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Duration: {selectedVideo.coursecat.courseduration}
                            </Typography>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Description: {selectedVideo.coursecat.coursedes}
                            </Typography>
                        </CardBody>
                    </Card>
                )}
            </div>

            {/* Suggested Videos */}
            <div className="w-1/4">
                <Typography variant="h6" className="mb-6">Suggested Videos</Typography>
                {videoData.map((video, index) => (
                    <Card
                        key={index}
                        className="mb-4 cursor-pointer"
                        onClick={() => handleVideoSelect(video)}
                    >
                        <CardHeader color="blue-gray" className="relative h-24">
                            <video width="100%" height="100%">
                                <source src={filePath + video.videoFile} type="video/mp4" />
                            </video>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                {video.coursecat.coursename}
                            </Typography>
                            <Typography variant="small" color="gray">
                                Duration: {video.coursecat.courseduration}
                            </Typography>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Video