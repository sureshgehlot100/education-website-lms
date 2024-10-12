import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Viewvideo() {
  let { changemenu } = useContext(mainContext);
  const [videoData, setvideoData] = useState([]);
  const [filepath, setfilePath] = useState('');
  const nav = useNavigate();
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
    nav(`/Addvideo/${e.target.value}`);
}
  useEffect(() => {
    handlefatchVideo();

  }, []);

  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu == true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Welcome To Admin Panel
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table >
                <tr>
                  <th>S.no</th>
                  <th>Course Name</th>
                  <th>Video Topic</th>
                  <th>Video </th>
                  <th>Action</th>
                </tr>
                {
                  videoData.map((video, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{video.coursecat.coursename}</td>
                        <td>{video.videotopic}</td>
                        <td><video width="200" height="150" controls>
                          <source src={filepath + video.videoFile} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video></td>
                        <td>{video.status}</td>
                        <td className='text-center'>
                          <button value={video._id} onClick={handleUpdate} className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
                          <button value={video._id} onClick={handleUpdate} className='bg-red-400 text-white px-5 py-1'>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }

              </table>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Viewvideo