"use client"
import Sidebar from '@/app/(common)/sidebar/page'
import Header from '@/app/(common)/header/page'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import Footer from '@/app/(common)/footer/page'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';


function Viewcourse() {
  const router = useRouter();
  const [courseData, setcourseData] = useState([]);
  const [filePath, setfilePath] = useState('');
  const [checked, SetChecked] = useState([]);
  const [pageNo, SetPageNo] = useState('1');
  const [pagewiseData, SetPageWiseData] = useState([]);
  const [TotalBTN, SetTotalBTN] = useState(null);
  const [allbtns, SetAllbtns] = useState([]);
  const [adminData, setAdminData] = useState('');

  useEffect(() => {
    const data = JSON.parse(Cookies.get('admin'));
    setAdminData(data);
  }, []);


  const handlefetchCourse = async () => {
    const data = JSON.parse(Cookies.get('admin'));
    setAdminData(data);
    try {
      const response = await axios.get('http://localhost:5500/course/read_courses', {
        // body:{},
        headers: {
          'Authorization': `Bearer ${data.auth}`
        }
      });
      if (response.status !== 200) return alert('something went wrong');

      setfilePath(response.data.filePath);

      setcourseData(response.data.data);

      // below process for pagination//
      const totalbtn = Math.ceil(response.data.data.length / 10);
      // console.log(totalbtn);
      // console.log(response.data.data);
      SetTotalBTN(totalbtn);


    } catch (error) {
      console.log(error);
      alert('something went wrong');

    }
  };
  useEffect(() => {
    handlefetchCourse()

  }, []);

  const handleStatus = async (e) => {
    const statusData = {
      id: e.target.value,
      Status: (e.target.textContent === 'Active') ? false : true
    }
    const response = await axios.put('http://localhost:5500/course/change_course_status', statusData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response);
    handlefetchCourse();

  };
  const handleUpdate = async (e) => {
    router.push(`/addcourse/${e.target.value}`);

  };
  const handleDelete = async (e) => {

    if (!window.confirm('Are you sure to delete')) return;

    try {
      const response = await axios.delete(`http://localhost:5500/course/delete_single_course/${e.target.value}`);
      console.log(response);
      if (response.status !== 200) return alert('Something went wrong');

      alert('Course deleted successfully');
      handlefetchCourse();
    }
    catch (err) {
      console.log(err);
      alert('Something Went wrong');
    }

  };
  const handleCheckInput = async (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    if (e.target.checked) {
      const newArr = [...checked, e.target.value];
      SetChecked(newArr);

    }
    else {
      const newArr = [...checked];
      const currentIndex = newArr.findIndex((item) => item === e.target.value);
      newArr.splice(currentIndex, 1);
      console.log(currentIndex);
      SetChecked(newArr);
    }
  };
  const handleMultiDelete = async () => {
    if (!window.confirm('Are you sure to delete')) return;
    try {
      const response = await axios.delete('http://localhost:5500/course/multi_delete', { data: checked }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response)

      if (response.status !== 200) return alert('Something went wrong');

      alert('Course deleted successfully');
      SetChecked([]);
      handlefetchCourse();

    } catch (error) {
      console.log(error);
      alert('Something went Wrong');
    }

  };
  const handleSearch = async (e) => {
    if (!e.target.value) return handlefetchCourse();
    try {
      const response = await axios.get(`http://localhost:5500/course/search_courses/${e.target.value}`);
      if (response.status !== 200) return alert('Something went Wrong');

      setcourseData(response.data.data);

    } catch (error) {
      console.log(error);
      alert('Something went Wrong');

    }

  };
  useEffect(() => {
    const pagedata = courseData.slice((pageNo - 1) * 10, ((pageNo - 1) + 10));
    SetPageWiseData(pagedata);
  }, [pageNo, courseData]);
  // console.log(pagewiseData)

  useEffect(() => {
    const pagedata = [];

    for (let i = 1; i <= TotalBTN; i++) {
      if (i > pageNo - 6 && i < pageNo + 6) {
        pagedata.push(<button value={i} className={`p-[10px_20px] mx-[6px] text-white ${(i === pageNo) ? 'bg-[darkblue]' : 'bg-[lightblue]'}`} onClick={(e) => { SetPageNo(Number(e.target.value)) }}>{i}</button>);
      }
    };
    SetAllbtns(pagedata);
  }, [TotalBTN, pageNo]);

  let SrNo = (pageNo * 10) - 9;

  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className='w-[95%] relative text-black px-[30px] py-[50px] h-full bg-[#F5F7FF]'>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Course Table
          </h1>
          <input type="text" placeholder="search" className="w-full border border-black p-[10px_20px]" onChange={handleSearch} />
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table className="border-collapse border border-slate-400" >
                <thead>
                  <tr>
                    <th className="border border-slate-600 p-2">S.no</th>
                    <th className="border border-slate-600 p-2">
                      <input type="checkbox"></input>
                      <button className='bg-[red] p-[6px_10px] rounded text-[white]' onClick={handleMultiDelete}>Delete</button>
                    </th >
                    <th className="border border-slate-600 p-2">Course Name</th>
                    <th className="border border-slate-600 p-2">Fees</th>
                    <th className="border border-slate-600 p-2">Duration</th>
                    <th className="border border-slate-600 p-2">Description</th>
                    <th className="border border-slate-600 p-2">Image</th>
                    <th className="border border-slate-600 p-2">Status</th>
                    <th className="border border-slate-600 p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pagewiseData.map((course, i) => {
                      return (
                        <tr>
                          <td className="border border-slate-600 p-2">{SrNo++}</td>
                          <td className="border border-slate-600 p-2">
                            <input type="checkbox" value={course._id} onClick={handleCheckInput} ></input>
                          </td>
                          <td className="border border-slate-600 p-2">{course.coursename}</td>
                          <td className="border border-slate-600 p-2">{course.courseprice
                          }</td>
                          <td className="border border-slate-600 p-2">{course.courseduration}</td>
                          <td className="border border-slate-600 p-2">{course.coursedes
                          }</td>
                          <td className="border border-slate-600 p-2">
                            <img src={filePath + course.thumbnail} alt="" className='w-[100px]' />
                          </td>
                          <td className="border border-slate-600 p-2">
                            <button value={course._id} onClick={handleStatus} className={`p-[4px_8px] ${((course.status) ? 'bg-[green]' : 'bg-[red]')} rounded text-[white]`}>{(course.status) ? 'Active' : 'Inactive'}</button>
                          </td>
                          <td className='text-center'>

                            <button value={course._id} className='bg-green-500 text-white px-5 mr-5 py-1' onClick={handleUpdate}>Edit</button>
                            <button value={course._id} className='bg-red-400 text-white px-5 py-1' onClick={handleDelete}>Delete</button>

                          </td>

                        </tr>

                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className='text-center py-[20px]'>
            {allbtns}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Viewcourse