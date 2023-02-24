import React from 'react'
import "../css/newcase.css"
import bookmark from "../images/bookmark.svg"
// import Footer from "../components/Footer"
import Tool from '../components/Tool'
import bookmarkicon from "../images/svg/bookmarkicon.svg"
import searchlogo from "../images/svg/search-logo.svg"
import themeicon from "../images/svg/theme.svg"
import notificationicon from "../images/svg/notification.svg"
import usericon from "../images/svg/user.svg"
import Sidenav from '../components/Sidebar'

const NewCase = () => {
    return (
        <>
            <nav className='nav_bar'>
                <section className='logo_box'>
                    
                    <div className='case-dashboard'>
                    <img src={bookmark} className='logo' alt='logo' />
                        <span className='dashboard-title'>Dashboard / </span>
                        <span className='case-no'>Case 1</span>
                    </div>
                </section>
                <section className='notification_btn'>
                    <div>
                        <img src={bookmarkicon} alt='bookmark' />
                    </div>
                    <div className='searchbar-box'>
                        <img className='searchbar-logo' src={searchlogo} alt='search-logo' />

                        <input type="search" className='search-bar' placeholder="Type Something|" />
                    </div>
                    <div>
                        <img src={themeicon} alt="theme icon" />

                    </div>
                    <div>
                        <img src={notificationicon} alt="notification icon" />

                    </div>
                    <div>
                        <img src={usericon} alt="user icon" />
                    </div>
                </section>
            </nav>

            <section className='container'>
                <Sidenav />
                <section className='canvas'>
                    canvas
                    <Tool />
                </section>
            </section>
            {/* <Footer/> */}

        </>
    )
}

export default NewCase