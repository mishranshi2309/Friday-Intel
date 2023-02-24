import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import terroristprofilling from "../images/svg/terrorist.svg"
import network from "../images/svg/network.svg"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import React from 'react'

const Sidenav = () => {
    const { collapseSidebar } = useProSidebar();

  return (
    <>
    <div >
      <Sidebar>
      <main>
        <button style={{textDecoration:"none"}} onClick={() => collapseSidebar()}><ArrowBackIosNewIcon/></button>
      </main>
        <Menu>
        <MenuItem> <img src={terroristprofilling}  alt="terrorist profilling logo"/>Terrorist Profiling</MenuItem>
        <SubMenu src={network}  label="Network Info" > 
      <MenuItem>TOR Doamin</MenuItem>
      <MenuItem>TOR URL</MenuItem>
      <MenuItem>I2P Domain</MenuItem>
      <MenuItem>Domain(DEEPWEB)</MenuItem>
      <MenuItem>URL (DEEPWEB)</MenuItem>
      <MenuItem>Domain</MenuItem>
      <MenuItem>Domain(Suspicious)</MenuItem>
      <MenuItem>URL</MenuItem>
    </SubMenu>
    <SubMenu label="File Info">
      <MenuItem>Image</MenuItem>
      <MenuItem>Document</MenuItem>
      <MenuItem>Other File</MenuItem>
    </SubMenu>
    <SubMenu label="Leaked Info">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <SubMenu label="SMS Info">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <SubMenu label="External Search Info">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    </Menu> 
      </Sidebar>
      
    </div>
    </>
  )
}

export default Sidenav
