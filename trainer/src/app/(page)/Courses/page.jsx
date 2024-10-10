import React from 'react'
import Sidebar from '../../(common)/sidebar/page'
import Header from '@/app/(common)/header/page'

function Course() {
    return (
        <div>
            <Header/>
            <div className="flex h-screen">
                {/* <!-- Sidebar --> */}
                <Sidebar />
                {/* <!-- Main content area --> */}
                <div class="flex-1 p-4">
                    {/* <!-- This is where the content will be displayed --> */}
                    <div id="content" className="bg-[#fff]">
                       course
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course