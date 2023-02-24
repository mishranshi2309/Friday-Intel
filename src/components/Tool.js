import React from 'react';
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "../css/tool.css"
// import fullscreen from "../images/fullscreen.png"
// import {AiOutlineFullscreen} from "react-icons/ai"
import {AiOutlineZoomIn} from "react-icons/ai"
import {AiOutlineZoomOut} from "react-icons/ai"
import {AiOutlineCamera} from "react-icons/ai"
import {BiTargetLock} from "react-icons/bi"
import {BiNetworkChart} from "react-icons/bi"
import {MdOutlineAccountTree} from "react-icons/md"
import {GrNetwork} from "react-icons/gr"




function Tool() {
  // const handle = useFullScreenHandle();
  return (
    <section className='navigation'>
      <nav className='menu'>
     {/* <button  className='btn' onClick={handle.enter}><AiOutlineFullscreen/> */}
      {/* </button> */}
      {/* <FullScreen handle={handle}></FullScreen> */}
      <button className='btn'><AiOutlineZoomIn/></button>
        <button className='btn'><AiOutlineZoomOut/></button>
        <button className='btn'><BiTargetLock/></button>
        <button className='btn'><BiNetworkChart/></button>
        <button className='btn'><MdOutlineAccountTree/></button>
        <button className='btn'><GrNetwork/></button>
        <button className='btn'><AiOutlineCamera/></button>
      </nav>

    </section>
  )
}

export default Tool
