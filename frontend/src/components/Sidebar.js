import React from 'react'
import logo from '../image/mainlogo.png'
// import {useNavigate} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { HiMiniUsers } from "react-icons/hi2";
import { FaCar } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import { MdAutoGraph } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineReviews } from "react-icons/md";


import Analytics from '../Pages/Dashboard/analytics';




import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill,
    BsListCheck, BsMenuButtonWideFill
}
    from 'react-icons/bs'



function Sidebar({ openSidebarToggle, OpenSidebar }) {
    // const auth = localStorage.getItem('user');
    // const navigate = useNavigate();
    // const logout = () =>{
    //     localStorage.clear();
    //     navigate('/login');
    // }
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <NavLink to={"/"}><div className='imgediv'>
                        <img src={logo} alt='Motor octane' className='siderbar-logo' />
                    </div></NavLink>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <NavLink activeClassName="active-side" to={"/"}> <li className='sidebar-list-item'>

                    <RxDashboard className='icon' /> Dashboard

                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/brand"}> <li className='sidebar-list-item'>

                    <BsFillArchiveFill className='icon' /> Brands

                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/product"}><li className='sidebar-list-item'>

                    <FaCar className='icon' /> Product

                </li></NavLink>

                <NavLink activeClassName="active-side" to={"/variant"}><li className='sidebar-list-item'>
                    <GiCarSeat className='icon' /> Variant
                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/users"}>   <li className='sidebar-list-item'>

                    <HiMiniUsers className='icon' /> Users

                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/Analytics"}>   <li className='sidebar-list-item'>

                    <MdAutoGraph className='icon' /> Popularity

                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/owner-review-table"}>   <li className='sidebar-list-item'>

                    <MdOutlineReviews className='icon' /> Owner's Review

                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/dealership"}>   <li className='sidebar-list-item'>

                    <MdOutlineReviews className='icon' /> Service & Networks

                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/rto-data"}>   <li className='sidebar-list-item'>

<MdOutlineReviews className='icon' /> RTO Data

</li></NavLink>
                {/* <NavLink activeClassName="active-side" to={"/sfdkbdsh"}>   <li className='sidebar-list-item'>

                    <MdOutlineReviews className='icon' /> Empty

                </li></NavLink>
                <NavLink activeClassName="active-side" to={"/fjsgnjf"}>   <li className='sidebar-list-item'>

                    <MdOutlineReviews className='icon' /> Empty

                </li></NavLink> */}
                {/* <li className='sidebar-list-item'>
                <a href="/login">
                    <BsFillGearFill className='icon'
                    onClick={logout}
                    />
                        Logout
                </a>
            </li> */}
            </ul>
            <div className='copy-write'>© Motor Octane</div>
        </aside>
    )
}

export default Sidebar