import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pdf() {
  const [studyData, setStudyData] = useState(null);
  const [filePath,setfilePath]= useState('');

  useEffect(() => {
    const fetchStudyData = async () => {
      try {
        const response = await axios.get('http://localhost:5500/study/read_study');
        setStudyData(response.data.data);
        setfilePath(response.data.filePath);
      } catch (error) {
        console.error('Error fetching study data:', error);
      }
    };

    fetchStudyData();
  }, []);

  if (!studyData) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lesson Material</h1>
      {studyData.map((lesson, index) => (
        <div key={index} className="mb-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Lesson {lesson.lessonNo}: {lesson.lessonName}
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={filePath+lesson.file}
              className="w-full h-full"
              title={`Lesson ${lesson.lessonNo} PDF`}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pdf;