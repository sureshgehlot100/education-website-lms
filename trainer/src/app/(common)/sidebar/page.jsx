"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { faChalkboardTeacher, faVideo, faBook, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (event, id) => {
        event.preventDefault();
        setIsOpen((prevOpen) => {
            const newOpen = {};
            newOpen[id] = !prevOpen[id];
            return newOpen;
        });
    };

    return (
        <div>
            <div className="w-64 bg-black h-full p-4">
                <ul>
                    <li className="block py-2 px-4 hover:bg-[#4B49AC]" onClick={(e) => handleItemClick(e, 'teacher')}>
                        <FontAwesomeIcon icon={faChalkboardTeacher} fontSize="2x" className='pr-3' />
                        <span className="pr-2">Teacher</span>
                        <FontAwesomeIcon icon={faAngleDown} fontSize="1x" className={`${isOpen['teacher'] ? 'rotate-180' : ''} pr-2`} />
                        <ul className={isOpen['teacher'] ? '' : 'hidden'}>
                            <li>
                                <Link href="/AddVideo" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    Add Teacher
                                </Link>
                            </li>
                            <li>
                                <Link href="/Video" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    View Teacher
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="block py-2 px-4 hover:bg-[#4B49AC]" onClick={(e) => handleItemClick(e, 'video')}>
                        <FontAwesomeIcon icon={faVideo} fontSize="2x" className='pr-3' />
                        <span className="pr-2">Video</span>
                        <FontAwesomeIcon icon={faAngleDown} fontSize="1x" className={`${isOpen['video'] ? 'rotate-180' : ''} pr-2`} />
                        <ul className={isOpen['video'] ? '' : 'hidden'}>
                            <li>
                                <Link href="/Video/AddVideo" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    Add Video
                                </Link>
                            </li>
                            <li>
                                <Link href="/Video/ViewVideo" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    View Video
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="block py-2 px-4 hover:bg-[#4B49AC]" onClick={(e) => handleItemClick(e, 'study')}>
                        <FontAwesomeIcon icon={faBook} fontSize="2x" className='pr-3' />
                        <span className="pr-2">Study</span>
                        <FontAwesomeIcon icon={faAngleDown} fontSize="1x" className={`${isOpen['study'] ? 'rotate-180' : ''} pr-2`} />
                        <ul className={isOpen['study'] ? '' : 'hidden'}>
                            <li>
                                <Link href="/StudyMaterial/AddStudy" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    Add Study
                                </Link>
                            </li>
                            <li>
                                <Link href="/StudyMaterial/ViewStudy" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    View Study
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="block py-2 px-4 hover:bg-[#4B49AC]" onClick={(e) => handleItemClick(e, 'course')}>
                        <FontAwesomeIcon icon={faBook} fontSize="2x" className='pr-3' />
                        <span className="pr-2">Course</span>
                        <FontAwesomeIcon icon={faAngleDown} fontSize="1x" className={`${isOpen['course'] ? 'rotate-180' : ''} pr-2`} />
                        <ul className={isOpen['course'] ? '' : 'hidden'}>
                            <li>
                                <Link href="/Courses/AddCourse" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    Add Course
                                </Link>
                            </li>
                            <li>
                                <Link href="/Courses/ViewCourse" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    View Course
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="block py-2 px-4 hover:bg-[#4B49AC]" onClick={(e) => handleItemClick(e, 'course')}>
                        <FontAwesomeIcon icon={faBook} fontSize="2x" className='pr-3' />
                        <span className="pr-2">LogIn</span>
                        <FontAwesomeIcon icon={faAngleDown} fontSize="1x" className={`${isOpen['course'] ? 'rotate-180' : ''} pr-2`} />
                        <ul className={isOpen['course'] ? '' : 'hidden'}>
                            <li>
                                <Link href="/Login" className="block py-2 px-4 hover:bg-[#4B49AC]">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- Add more items here --> */}
                </ul>
            </div>
        </div >
    );
}

export default Sidebar