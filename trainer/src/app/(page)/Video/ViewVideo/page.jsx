"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '../../../(common)/sidebar/page'
import Header from '@/app/(common)/header/page'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Footer from '@/app/(common)/footer/page'

function Viewvideo() {
    const router = useRouter();
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

    const handleUpdate = async (e) => {
        console.log(e.target);
        router.push(`/Video/AddVideo/${e.target.value}`);
    }

    useEffect(() => {
        handlefatchVideo();

    }, []);

    return (
        <div className='bg-[#F5F7FF] h-full'>
            <Header />
            <div className='flex bg-[#F5F7FF]'>
                <Sidebar />
                <div className='w-[95%] relative px-[30px] py-[50px] h-full bg-[#F5F7FF] text-black' >
                    <h1 className='text-[25px] font-[500] mb-[10px]'>
                        Welcome Trainer
                    </h1>
                    <div className=''>
                        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
                            <table style={{
                                borderCollapse: 'collapse'
                            }}>
                                <thead>
                                    <tr>
                                        <th style={{
                                            border: '1px solid #ddd',
                                            padding: '8px',
                                            textAlign: 'left'
                                        }}>S.no</th>
                                        <th style={{
                                            border: '1px solid #ddd',
                                            padding: '8px',
                                            textAlign: 'left'
                                        }}>Course Name</th>
                                        <th style={{
                                            border: '1px solid #ddd',
                                            padding: '8px',
                                            textAlign: 'left'
                                        }}>Video Topic</th>
                                        <th style={{
                                            border: '1px solid #ddd',
                                            padding: '8px',
                                            textAlign: 'left'
                                        }}>Video</th>
                                        <th style={{
                                            border: '1px solid #ddd',
                                            padding: '8px',
                                            textAlign: 'left'
                                        }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        videoData.map((video, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px',
                                                        textAlign: 'left'
                                                    }}>{index + 1}</td>
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px',
                                                        textAlign: 'left'
                                                    }}>{video.coursecat.coursename}</td>
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px',
                                                        textAlign: 'left'
                                                    }}>{video.videotopic}</td>
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px',
                                                        textAlign: 'left'
                                                    }}>
                                                        <video width="200" height="150" controls>
                                                            <source src={filepath + video.videoFile} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </td>
                                                    {/* <td style={{
                                                    border: '1px solid #ddd',
                                                    padding: '8px',
                                                    textAlign: 'left'
                                                }}>{video.status}</td> */}
                                                    <td style={{
                                                        border: '1px solid #ddd',
                                                        padding: '8px',
                                                        textAlign: 'left'
                                                    }}>
                                                        <button value={video._id} className='bg-green-500 text-white px-5 mr-5 py-1' onClick={handleUpdate}>Edit</button>
                                                        <button value={video._id} className='bg-red-400 text-white px-5 py-1'>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Viewvideo