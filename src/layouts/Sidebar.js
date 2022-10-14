import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaBriefcase, FaUsers, FaHandshake, FaPiggyBank,  } from 'react-icons/fa'


const Sidebar = () => {
    const active = window.location.pathname;

    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Dashboard",
            link: "/#"
        },
    ]
    const customers = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            name: "Users",
            link: "/"
        },
        {
            icon: <FontAwesomeIcon icon={FaUsers} />,
            name: "Guarantors",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Loans",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={FaHandshake} />,
            name: "Decision Models",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={FaPiggyBank} />,
            name: "Savings",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Loan Requests",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Whitelist",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Karma",
            link: "/#"
        },
    ]
    const businesses = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Organization",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Loan Products",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Saving Products",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Fees and Charges",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Transactions",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Services",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Service Amount",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Settlements",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Reports",
            link: "/#"
        },
    ]
    const settings = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Preferences",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Fees and Pricing",
            link: "/#"
        },
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            name: "Audit Logs",
            link: "/#"
        },
    ]

  return (
    <div className='sidebar'>
        <ul>
            <li><FaBriefcase /> Switch Organization</li>
        </ul>
        <ul>
            {
                menuItems.map((item, index) => {
                    return <NavLink key={index} to={item.link} ><li className={item.link === active ? "active" : ""}> <span>{item.icon}</span> {item.name} </li></NavLink>
                })
            }
        </ul>
        <p>Customers</p>
        <ul>
            {
                customers.map((item, index) => {
                    return <NavLink key={index} to={item.link} ><li className={item.link === active ? "active" : ""}> <span>{item.icon}</span> {item.name} </li></NavLink>
                })
            }
        </ul>
        <p>Businesses</p>
        <ul>
            {
                businesses.map((item, index) => {
                    return <NavLink key={index} to={item.link} ><li className={item.link === active ? "active" : ""}> <span>{item.icon}</span> {item.name} </li></NavLink>
                })
            }
        </ul>
        <p>Settings</p>
        <ul>
            {
                settings.map((item, index) => {
                    return <NavLink key={index} to={item.link} ><li className={item.link === active ? "active" : ""}> <span>{item.icon}</span> {item.name} </li></NavLink>
                })
            }
        </ul>
    </div>
  )
}

export default Sidebar