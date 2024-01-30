import React from 'react'
import "./Home.css";
import Topbar from '../../comopnents/Topbar/Topbar';
import Sidebar from '../../comopnents/sidebar/Sidebar';
import Rightbar from '../../comopnents/rightbar/Rightbar';
import TimeLine from '../../comopnents/timeline/TimeLine';

export default function Home() {
  return (
  < >
   <Topbar />
   <div className="homeContainer">
   <Sidebar />
   <TimeLine />
   <Rightbar />
   </div>
  </>
  );
}
