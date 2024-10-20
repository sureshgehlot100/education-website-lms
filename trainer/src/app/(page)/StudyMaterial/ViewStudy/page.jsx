"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '@/app/(common)/sidebar/page'
import Header from '@/app/(common)/header/page'
import Footer from '@/app/(common)/footer/page'
import axios from 'axios'
function ViewStudy() {
  const [studyMaterials, setStudyMaterials] = useState([]);
  const [filePath, setfilePath] = useState('');
  useEffect(() => {
    const fetchStudyMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:5500/study/read_study');
        // console.log(response)
        setfilePath(response.data.filePath)
        setStudyMaterials(response.data.data);
      } catch (error) {
        console.error('Error fetching study materials:', error);
      }
    };

    fetchStudyMaterials();
  }, []);
  return (
    <div>
      <Header />
      <div className="flex h-screen">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- Main content area --> */}
        <div className="flex-1 p-4">
          {/* <!-- This is where the content will be displayed --> */}
          <div id="content" className="bg-[#fff]">
            <div id="content" className="bg-[#fff] h-screen flex flex-col justify-center items-center text-black">
              <h2 className="text-center text-2xl text-black mb-4">Uploaded Study Materials</h2>
              <div className="w-full max-w-2xl">
                {studyMaterials.length === 0 ? (
                  <p>No study materials available.</p>
                ) : (
                  <ul className="space-y-4">
                    {studyMaterials.map((material) => (
                      <li key={material.id} className="border p-4 rounded">
                        <h3 className="font-bold">{material.title}</h3>
                        <p>Lesson Number: {material.lessonNumber}</p>
                        <a
                          href={filePath + material.file} // Adjust the URL to access the PDF file
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          View PDF
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ViewStudy