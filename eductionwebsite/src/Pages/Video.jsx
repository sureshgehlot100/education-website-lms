import React, { useEffect, useState } from 'react'
import Header from '../Common/Header';
import TitleSection from '../Common/TitleSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import Footer from '../Common/Footer';
function Videos() {
    let [catelog, setcatelog] = useState('')
    let [search, setsearch] = useState('')
    let [faq, setFaq] = useState(false);
    const [videoData, setVideoData] = useState([]);
    const [filePath, setfilePath] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const videosPerPage = 6;
    const pagesVisited = pageNumber * videosPerPage;


    const getVideos = async (req, res) => {
        try {
            const response = await axios.get('http://localhost:5500/videos/read_video');
            console.log(response);
            setVideoData(response.data.data);
            setfilePath(response.data.filePath);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getVideos();
    }, []);
    const displayVideos = videoData
        .slice(pagesVisited, pagesVisited + videosPerPage)
        .map((Video, index) => (
            (
                <Card className="mt-6 w-96">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <video width="100%" height="400" controls>
                            <source src={filePath + Video.videoFile} type="video/mp4" topic={Video.videotopic} />
                        </video>
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {Video.coursecat.coursename}
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {Video.coursecat.courseprice}
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Duration: {Video.coursecat.courseduration}
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Description: {Video.coursecat.coursedes}
                        </Typography>
                    </CardBody>
                </Card>
            )
        ));
    const pageCount = Math.ceil(videoData.length / videosPerPage);

    const changePage = ({ selected }) => {
        if (selected < 0 || selected >= pageCount) {
            console.error('Invalid page number');
            return;
        }
        setPageNumber(selected);
    };

    useEffect(() => {
        setcatelog("All")
    }, []);
    return (
        <>
            <Header />
            <TitleSection title={"Videos"} />
            <div className='max-w-[1300px] m-auto mt-4 py-5'>
                <div className='grid grid-cols-[73%_auto] gap-4'>
                    <div className=' py-5 px-4'>
                        <form action="" >
                            <div className='flex gap-4'>
                                <div className='w-[25%]'>
                                    <select name="" id="" onChange={(e) => setcatelog(e.target.value)} className='w-full h-[45px]  rounded-[3px] px-3 border border-[gray] text-[gray]'>
                                        <option value="All">Select...</option>
                                        <option value="Desgin">Desgin</option>
                                        <option value="3D + Animation">3D + Animation</option>
                                    </select>
                                </div>
                                <div className='w-[35%] flex items-center relative'>
                                    <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} className='w-full h-[45px] rounded-[3px] px-3 border border-[gray] focus:outline-none ' placeholder='Search Our Course' />
                                    <FontAwesomeIcon icon={faSearch} className='absolute text-[gray] text-[20px] top-[13px] right-[10px] z-[99]' />
                                </div>
                            </div>
                        </form>
                        <div className='grid grid-cols-2 gap-8 mt-[40px] d-flex'>
                            {displayVideos}
                        </div>
                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={'paginationBttns bg-gradient-to-r from-light-blue-500 to-light-blue-500 py-1 px-4 rounded text-white font-bold hover:bg-blue-700'}
                            previousLinkClassName={'previousBttn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                            nextLinkClassName={'nextBttn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                            disabledClassName={'bg-gray-300 text-gray-500 py-2 px-4 rounded'}
                            activeClassName={'bg-green-500 text-white font-bold py-2 px-4 rounded'}
                        />
                    </div>
                    <div className=' py-5 px-3'>
                        <div className='faq border-[2px] rounded-[10px] py-6 '>
                            <div onClick={() => setFaq(!faq)} className={`flex  justify-between items-center px-6`}>
                                <h4 className='text-[20px] font-bold'>Category Filter</h4>
                                <FontAwesomeIcon icon={faq !== true ? faAngleDown : faAngleUp} />
                            </div>
                            <ul className={`mx-[25px]   ${faq !== true ? "duration-[1s] mt-4 visible opacity-[1] max-h-[500px]" : "mt-0 duration-[1s] invisible opacity-0 max-h-[0]"} `}>
                                <li className='mb-2 text-[20px]'>Desgin</li>
                                <li className='mb-2 text-[20px]'>Desgin</li>
                                <li className='mb-2 text-[20px]'>Desgin</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Videos;
