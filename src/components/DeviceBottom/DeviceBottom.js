import React from 'react'
import './DeviceBottom.css'

export default function DeviceBottom(props) {
    // function handleNotify() {
    //     console.log("Notify Button Clicked!!!")
    // }
    // function handleLogOut() {
    //     console.log("LogOut Button Clicked!!!")
    // }
    return (
        <div className="deviceBtmContainer">
            <div className="deviceBtm">
            <input type="button" className="button1" value="NOTIFY" onClick={props.notify}/>
            <input type="button" className="button2" value="LOG OUT" onClick={props.logout}/>
            </div>
        </div>
    )
}
