import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Viewslider() {
  const nav = useNavigate();
  let { changemenu } = useContext(mainContext);
  const [slidesData, setSlidesData] = useState([]);
  const [filepath, setfilePath] = useState('');

  const handlefetchSlides = async (req, res) => {
    try {
      const response = await axios.get('http://localhost:5500/slides/read_slide');

      if (response.status !== 200) return alert('something went wrong');

      setfilePath(response.data.filePath);
      setSlidesData(response.data.data);

    } catch (error) {
      console.log(error);
      alert('something went wrong')

    }
  };
  useEffect(() => {
    handlefetchSlides();
  }, []);

  const handlesingleslidesDelete = async (e) => {
    if (!window.confirm('Are you sure to delete')) return;
    console.log(e.target.value);
    try {
      const response = await axios.delete(`http://localhost:5500/slides/delete_single_slides/${e.target.value}`);

      if (response.status !== 200) return alert('something went wrong');
      alert('slides deleted successfully');
      handlefetchSlides();

    } catch (error) {
      console.log(error);
      alert('something went wrong');

    }

  };
  const handleStatus = async (e) => {
    const statusData = {
      id: e.target.value,
      Status: (e.target.textContent === 'Active') ? false : true
    }
    const response = await axios.put('http://localhost:5500/slides/change_slides_status', statusData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response);
    handlefetchSlides();
  };
  const handleUpdate = async (e) => {
    nav(`/addslider/${e.target.value}`);
  }

  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={`${changemenu === true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Slider Table
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table >
                <tr>
                  <th>S.no</th>
                  <th>Slider Heading</th>
                  <th>Slider sub-heading</th>
                  <th>Slider Description</th>
                  <th>Slider Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  slidesData.map((slides, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{slides.slidesheading}</td>
                        <td>{slides.slidessubheading}</td>
                        <td>{slides.slidesdes}</td>
                        <td>
                          <img src={filepath + slides.thumbnail} alt="" className='w-[100px]' />
                        </td>
                        <td> <button value={slides._id} onClick={handleStatus} className={`p-[4px_8px] ${((slides.status) ? 'bg-[green]' : 'bg-[red]')} rounded text-[white]`}>{(slides.status) ? 'Active' : 'Inactive'}</button></td>
                        <td className='text-center'>
                          <button value={slides._id} onClick={handleUpdate} className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
                          <button value={slides._id} onClick={handlesingleslidesDelete} className='bg-red-400 text-white px-5 py-1'>Delete</button>
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

export default Viewslider