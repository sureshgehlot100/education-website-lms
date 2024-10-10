import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Viewteam() {
  const nav = useNavigate()
  let { changemenu } = useContext(mainContext);
  const [teamsData, setTeamsData] = useState([]);
  const [filepath, setfilePath] = useState('');

  const handlefetchedTeams = async (req, res) => {
    try {
      const response = await axios.get('http://localhost:5500/teams/read_teams');
      console.log(response);
      if (response.status !== 200) return alert('something went wrong');

      setfilePath(response.data.filePath);
      console.log(setfilePath);
      setTeamsData(response.data.data);
      console.log(setTeamsData);

    } catch (error) {
      console.log(error);

    }

  };
  useEffect(() => {
    handlefetchedTeams();
  }, []);
  const handleSigleteamsdelete = async (e) => {
    if (!window.confirm('Are you sure to delete')) return;
    console.log(e.target.value);
    try {
      const response = await axios.delete(`http://localhost:5500/teams/delete_single_teams/${e.target.value}`);

      if (response.status !== 200) return alert('something went wrong');
      alert('Teams deleted successfully');
      handlefetchedTeams();

    } catch (error) {
      console.log(error);
      alert('somethings went wrong');
    }

  };
  const handleUpdate = async (e) => {
    nav(`/addteam/${e.target.value}`);
  }


  return (


    <div>

      <Header />

      <div className='flex  bg-[#F5F7FF]'>
        <Sidebar />

        <div className={` ${changemenu === true ? 'w-[95%]' : 'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

          <h1 className='text-[25px] font-[500] mb-[10px]'>
            Team Table
          </h1>
          <div className=''>
            <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
              <table >
                <tr>
                  <th>S.no</th>
                  <th>Member Name</th>
                  <th>Subject</th>
                  <th>Member Image</th>
                  {/* <th>Status</th> */}
                  <th>Action</th>
                </tr>
                {
                  teamsData.map((teams, i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{teams.teamsmembername}</td>
                        <td>{teams.teamsSubject}</td>
                        <td> <img src={filepath + teams.thumbnail} alt="" className='w-[100px]' /></td>
                        {/* <td>{i + 1}</td> */}
                        <td className='text-center'>
                          <button value={teams._id} onClick={handleUpdate} className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
                          <button value={teams._id} className='bg-red-400 text-white px-5 py-1' onClick={handleSigleteamsdelete}>Delete</button>
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

export default Viewteam