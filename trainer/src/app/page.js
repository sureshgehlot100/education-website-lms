"use client";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "./(common)/sidebar/page";
import Header from "./(common)/header/page";
import Footer from "./(common)/footer/page";

function Home() {
  
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
            hoiii
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
