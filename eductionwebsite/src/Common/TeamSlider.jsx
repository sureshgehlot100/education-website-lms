import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function TeamSlider() {

    
    const [TeamData, setTeamData] = useState([]);
    const [filePath, setfilePath] = useState('');
    
    const getcourse = async (req, res) => {
        try {
            const response = await axios.get('http://localhost:5500/teams/read_teams');
            setTeamData(response.data.data);
            setfilePath(response.data.filePath);
            // console.log(response);

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getcourse();
    }, []);

    const setting2 = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
           
          ],
      };

      
  return (
    <>
        <Slider {...setting2} >

            {
                TeamData.map(v=>{
                    return(
                        <div className='w-full '>
                            <div className='w-[150px] m-auto  h-[150px] rounded-[50%] overflow-hidden'>
                                <img src={filePath + v.thumbnail} alt="" />
                              
                            </div>
                            <ul className='flex justify-center text-[13px] text-yellow-400 gap-2 mt-5 mb-2'>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>
                                    <li><FontAwesomeIcon icon={faStar}/></li>

                                </ul>
                                <h1 className='text-[19px]'>{v.teamsmembername}</h1>
                        </div>
                    )
                })
            }
           

        </Slider>
    
    
    </>
  )
}

export default TeamSlider