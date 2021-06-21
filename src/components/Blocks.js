import React from 'react'
import { Nav } from "react-bootstrap";
export const Blocks = () => {
    const menu = [
        {
            link: "#Profile",
            label: "Profile",
            icon: "fas fa-user-circle"
        },
        {
            link: "#Groupe",
            label: "Groupe",
            icon: "fas fa-users"
        },
        {
            link: "#Agenda",
            label: "Agenda",
            icon: "fas fa-calendar-week"
        },
    ]
    return (
        <div>
            <Nav defaultActiveKey="/home" className="flex-column">
                {menu.map(m => <Nav.Link href={m.link}> <i class={m.icon}></i> {m.label} </Nav.Link>)}

            </Nav>
        </div>
    )
}

export const Footer = () => {
    return (
        <div >
            <div style={{ textAlign: "center", width: "100%", backgroundColor: "black", marginTop: "20px" }} >
                <h4>By Wael Sellami</h4></div>
        </div>
    )
}

