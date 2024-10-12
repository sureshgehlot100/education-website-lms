"use client"
import Sidebar from '../../../../(common)/sidebar/page'
import Header from '@/app/(common)/header/page'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation';
import Footer from '@/app/(common)/footer/page'
import React, { useEffect, useState } from 'react'

function Course() {
    const router = useRouter();
    const params = useParams();
    const [data, setData] = useState({});
    const [imgPrev, setimgPrev] = useState('');

    const fetchData = async (id) => {
        const response = await axios.get(`http://localhost:5500/course/fetch_course_with_id/${id}`);
        console.log(response);
        const oldaData = (response.data.data);
        oldaData.status = oldaData.status.toString();
        setData(oldaData);
    };

    useEffect(() => {
        if (params._id) {
            fetchData(params._id);
        }
    }, []);

    const handleAddCourse = async (e) => {

        e.preventDefault();
        const form = e.target;
        console.log(form);
        const formData = new FormData(form);
        console.log(formData)

        if (params._id) {
            try {
                const response = await axios.put(`http://localhost:5500/course/update_course/${params._id}`, formData);

                if (response.status !== 200) return alert('something went wrong');

                router.push('/Course/ViewCourse');

            }
            catch (error) {
                console.log(error);
                alert('something went wrong');
            }

        }
        else {
            try {
                const response = await axios.post('http://localhost:5500/course/add_course', formData, {});
                console.log(response);
                if (response.status !== 200) return alert('something went wrong');
                router.push('/Course/ViewCourse');
            }
            catch (error) {
                console.log(error);
                alert('something went wrong');
            }
        }
    };
    const handleImgprev = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        if (file) {
            reader.readAsDataURL(file);
        }
        reader.onload = () => {
            setimgPrev(reader.result);

        }
    };
    const handleDataUpdate = (e) => {
        const olddata = { ...data };
        olddata[e.target.name] = e.target.value;

        setData(olddata);
    }
    return (
        <div>
            <Header />
            <div className="flex ">
                {/* <!-- Sidebar --> */}
                <Sidebar />
                {/* <!-- Main content area --> */}
                <div className='w-[95%] relative px-[30px] pt-[20px] pb-[60px] text-black bg-[#F5F7FF] h-full'>
                    <h1 className='text-[25px] font-[500] mb-[10px]'>
                        Courses
                    </h1>
                    <div className=''>
                        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
                            <form action="" onSubmit={handleAddCourse}>
                                Courses Name
                                <input onChange={handleDataUpdate} type="text" value={data.coursename} name='coursename' className='border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                                Courses Price
                                <input type="text" onChange={handleDataUpdate} value={data.courseprice} name='courseprice' className='border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                                Courses Duration
                                <input type="text" onChange={handleDataUpdate} value={data.courseduration} name='courseduration' className='border px-4 border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                                Courses Description
                                <textarea onChange={handleDataUpdate} value={data.coursedes} name="coursedes" id="" className='border px-4 pt-3 border-gray-400 my-2 w-full h-[100px]' cols="30" rows="10"></textarea>
                                <input type="file" onChange={handleImgprev} name='thumbnail' id='file-input' className='border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                                <div className='flex items-center gap-0 mt-[80px]'>
                                    <div className='w-full flex items-center'>
                                        <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                                        <label id="file-input-label" for="file-input" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
                                    </div>
                                    {/* <div className=''>
                                        <img src={imgPrev || data.thumbnail || prev} alt="" width={150} />
                                    </div> */}
                                </div>
                                Courses Stauts
                                <div className='flex items-center mt-5  mb-8 gap-2'>
                                    <input type="radio" onClick={handleDataUpdate} checked={data.status === 'true'} value={true} name='status' className='mx-2 w-[20px] h-[20px] text-[20px]' /> Active
                                    <input type="radio" onClick={handleDataUpdate} checked={data.status === 'false'} value={false} name='status' className='mx-2 w-[20px] h-[20px] text-[20px]' /> Deactive
                                </div>

                                <input type="submit" className='bg-[#4B49AC] mb-8 mt-7 text-[18px] px-8 py-2 rounded-[10px] text-white' />
                                <input type="reset" value="Cancel" className='bg-[#F8F9FA] ml-4  text-[18px] px-8 py-2 rounded-[10px] text-black' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Course