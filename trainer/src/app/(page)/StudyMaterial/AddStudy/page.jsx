'use client'
import React, { useState } from 'react';
import Sidebar from '../../../(common)/sidebar/page'
import Header from '@/app/(common)/header/page'
import Footer from '@/app/(common)/footer/page';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function StudyMaterial() {
    const [title, setTitle] = useState('');
    const [lessonNumber, setLessonNumber] = useState('');
    const [file, setFile] = useState(null);
    const router = useRouter();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        // console.log(form)
        const formData = new FormData(form);
        // console.log(formData)
        const file = formData.get('file');
        // console.log(file);
        try {
            const response = await axios.post(`http://localhost:5500/study/add_study/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log(response);

            if (response.status !== 200) return alert('something went wrong');

            router.push('/StudyMaterial/ViewStudy');

        }
        catch (error) {
            console.log(error);
            alert('something went wrong');
        }

    };
    return (
        <div>
            <Header />
            <div className="flex h-screen">
                {/* <!-- Sidebar --> */}
                <Sidebar />
                {/* <!-- Main content area --> */}
                <div class="flex-1 p-4">
                    {/* <!-- This is where the content will be displayed --> */}
                    <div id="content" className="bg-[#fff] h-full flex justify-center items-center">
                        <div className="max-w-md shadow-lg p-6 bg-white rounded-lg">
                            <h2 className="text-center text-2xl text-black mb-4">Upload Study Material</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="title"
                                        type="text"
                                        name='title'
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lessonNumber">
                                        Lesson Number
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="lessonNumber"
                                        type="number"
                                        name="lessonNumber"
                                        value={lessonNumber}
                                        onChange={(event) => setLessonNumber(event.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                                        Upload File (PDF)
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="file"
                                        name="file"
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default StudyMaterial