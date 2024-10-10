import React, { useEffect, useState } from 'react'
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import axios from 'axios';


function Video() {
    const [videoData, setvideoData] = useState([]);
    const [filepath, setfilePath] = useState('');
    const handlefatchVideo = async (req, res) => {
        const response = await axios.get('http://localhost:5500/videos/read_video');
        console.log(response);
        try {
            if (response.status !== 200) return alert('something went wrong');
            setfilePath(response.data.filePath);
            console.log(setfilePath);

            setvideoData(response.data.data);
            console.log(setvideoData);

        } catch (error) {
            console.log(error)

        }

    };
    useEffect(() => {
        handlefatchVideo();

    }, []);

    return (
        <div className="mx-auto my-16 flex max-w-screen-lg gap-8  ">
            <Card className="bg-white rounded-lg shadow-md">
                <CardBody>
                    <div className="flex flex-wrap justify-evenly gap-6">
                        {
                            videoData.map((Video, index) => {
                                return (
                                    <Card className="mt-6 w-96">
                                        <CardHeader color="blue-gray" className="relative h-56">
                                            <video width="100%" height="400" controls>
                                                <source src={filepath + Video.videoFile} type="video/mp4" topic={Video.videotopic} />
                                            </video>
                                        </CardHeader>
                                        <CardBody>
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                {Video.coursecat.coursename}
                                            </Typography>
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                {Video.coursecat.courseprice}
                                            </Typography>
                                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                                Duration: {Video.coursecat.courseduration}
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                                Description: {Video.coursecat.coursedes}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                )
                            })

                        }
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Video