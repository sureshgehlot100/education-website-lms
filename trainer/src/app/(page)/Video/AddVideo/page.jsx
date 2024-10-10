"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '../../../(common)/sidebar/page'
import Header from '@/app/(common)/header/page'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import Footer from '@/app/(common)/footer/page'


function Addvideo() {
    const router = useRouter();
    const params = useParams();
    const [courseData, setcourseData] = useState([]);
    const [filePath, setfilePath] = useState('');
    const [data, SetData] = useState({});


    const handlefetchCourse = async () => {
        try {
            const response = await axios.get('http://localhost:5500/course/true_courses');
            if (response.status !== 200) return alert('something went wrong');

            setfilePath(response.data.filePath);

            setcourseData(response.data.data);


        } catch (error) {
            console.log(error);
            alert('something went wrong');

        }
    };
    useEffect(() => {
        handlefetchCourse();
    }, []);

    const handleaddVideo = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('videoFile', data.videoFile);
        console.log(formData);
        if (params._id) {
            try {
                const response = await axios.put(`http:localhost:5500/videos/update_video/${params._id}`, data);
                if (response.status !== 200) return alert('something went wrong');
                router.push('/Video/ViewVideo');
            } catch (error) {
                console.log(error);
                alert('something went wrong');
            }
        }
        else {
            try {
                const response = await axios.post('http://localhost:5500/videos/add_video', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                },);

                if (response.status !== 200) return alert('something went wrong');
                alert('data inserted successfully');
                console.log(response);
                router.push('/Video/ViewVideo');

            } catch (error) {
                console.log(error);
                alert('something went wrong');
            }
        }


    };

    return (
        <div>
            <Header />
            <div className='flex bg-[#F5F7FF]'>
                <Sidebar />
                <div className='w-[80%] bg-[#F5F7FF] m-4 text-black'>
                    <h1 className='text-[25px] font-[500] text-black mb-[10px]'>
                        Add Video
                    </h1>
                    <div className=''>
                        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
                            <form action="" onSubmit={handleaddVideo}>
                                Course Category
                                <select name="coursecat" onChange={(e) => { SetData({ ...data, coursecat: e.target.value }) }} id="" className='w-full border my-3 border-gray-400 h-[50px]'>
                                    {
                                        courseData.map((item, index) => (
                                            <option value={item._id} className=''>{item.coursename}</option>

                                        ))
                                    }
                                </select>
                                Video Topic
                                <input type="text" onChange={(e) => { SetData({ ...data, videotopic: e.target.value }) }} name='videotopic' className='border border-gray-400 w-full h-[50px] mb-3 mt-2 px-4 ' />
                                Video File
                                <input type="file" onChange={(e) => { const file = e.target.files[0]; SetData({ ...data, videoFile: file }) }} name='videoFile' className='border border-gray-400 w-full h-[50px] mb-3 mt-2 px-4' />
                                Video Stauts
                                <div className='flex items-center mt-5  mb-8 gap-2'>
                                    <input type="radio" onChange={(e) => { SetData({ ...data, status: e.target.value }) }} name='status' value={true} className='mx-2 w-[20px] h-[20px] text-[20px]' /> Active
                                    <input type="radio" onChange={(e) => { SetData({ ...data, status: e.target.value }) }} name='status' value={false} className='mx-2 w-[20px] h-[20px] text-[20px]' /> Deactive
                                </div>
                                <input type="submit" className='bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white' />
                                <input type="reset" value="Cancel" className='bg-[#F8F9FA] ml-4  text-[18px] px-8 py-2 rounded-[10px] text-black' />
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Addvideo