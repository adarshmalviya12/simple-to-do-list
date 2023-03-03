import React from 'react'
import { FaInbox, FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className='sidebar'>
            <div
                className={selectedTab === "INBOX" ? "active" : ""}
                onClick={() => setSelectedTab("INBOX")} >
                <FaInbox className='icon' />
                Inbox
            </div>
            <div
                className={selectedTab === "TODAY" ? "active" : ""}
                onClick={() => setSelectedTab("TODAY")}>
                <FaRegCalendarAlt className='icon' />
                Today
            </div>
            <div
                className={selectedTab === "NEXT 7 days" ? "active" : ""}
                onClick={() => setSelectedTab("NEXT 7 DAYS")}>
                <FaRegCalendarCheck className='icon' />
                Next 7 days
            </div>
        </div>
    )
}

export default Sidebar
