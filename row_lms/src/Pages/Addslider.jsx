import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import prev from '../img/generic-image-file-icon-hi.png'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

function Addslider() {
  const nav = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});
  let { changemenu } = useContext(mainContext);
  const [imgPrev, setimgPrev] = useState('');

  const fetchData = async (id) => {
    const response = await axios.get(`http://localhost:5500/slides/fetch_slides_with_id/${id}`);
    const oldData = (response.data.data);
    // console.log(oldData);
    oldData.status = oldData.status.toString();
    setData(oldData);
  };

  useEffect(() => {
    if (params._id) {
      fetchData(params._id);
    }
  }, []);

  const handleAddSlides = async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);

    const formData = new FormData(form);
    console.log(formData);

    if (params._id) {
      try {
        const response = await axios.put(`http://localhost:5500/slides/update_slides/${params._id}`, formData);
        console.log(response);
        if (response.status !== 200) return alert('something went wrong');

        nav('/viewslider');

      } catch (error) {
        console.log(error);
        alert('something went wrong');
      }
    }
    else {
      try {
        const response = await axios.post('http://localhost:5500/slides/add_slides', formData, {});

        if (response.status !== 200) return alert('something went wrong');

        nav('/viewslider');

      } catch (error) {
        console.log(error);
        alert('something went wrong');

      }
    }
  };
  const handleDataUpdate = (e) => {
    const olddata = { ...data };
    olddata[e.target.name] = e.target.value;
    setData(olddata);
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
  return (
    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu === true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] pt-[20px] pb-[60px]  bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Slider
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <form action="" onSubmit={handleAddSlides}>
                Slider Heading
                <input onChange={handleDataUpdate} value={data.slidesheading} type="text" name='slidesheading' className='border border-gray-400 px-4 w-full h-[50px] mb-3 mt-2 ' />
                Slider Sub-Heading
                <input onChange={handleDataUpdate} value={data.slidessubheading} type="text" name='slidessubheading' className='border border-gray-400 w-full h-[50px] mb-3 mt-2 px-4 ' />
                Slider Image
                <input type="file" onChange={handleImgprev} name='thumbnail' id='file-input' className='border hidden border-gray-400 w-full h-[50px] mb-3 mt-2 ' />
                <div className='flex items-center gap-0 mt-[80px]'>
                  <div className='w-full flex items-center'>
                    <input type="text" readOnly placeholder='Upload File' className=' px-4 rounded-[10px_0px_0px_10px] border border-gray-400 w-[70%] h-[50px]' />
                    <label id="file-input-label" for="file-input" className='border block  bg-[#4B49AC] text-white text-center leading-[50px]  w-[10%] rounded-[0px_20px_20px_0px] h-[50px]  '>Upload</label>
                  </div>
                  <div className=''>
                    <img src={imgPrev || data.thumbnail || prev} alt="" width={150} />
                  </div>
                </div>
                Slider Description
                <textarea onChange={handleDataUpdate} value={data.slidesdes} name="slidesdes" id="" className='border px-4 pt-3 border-gray-400 my-2 w-full h-[100px]' cols="30" rows="10"></textarea>
                Slider Stauts
                <div className='flex items-center mt-5  mb-8 gap-2'>
                  <input type="radio" onClick={handleDataUpdate} checked={data.status === 'true'} value={true} name='status' className='mx-2 w-[20px] h-[20px] text-[20px]' /> Active
                  <input type="radio" onClick={handleDataUpdate} checked={data.status === 'false'} value={false} name='status' className='mx-2 w-[20px] h-[20px] text-[20px]' /> Deactive
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

export default Addslider