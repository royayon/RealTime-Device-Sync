import React from "react";
import "./DeviceOrbit.css";


export default function DeviceOrbit(props) {
  return (
    <div className="deviceBody">
      <h1 className="deviceCount">{props.devices}</h1>
      <h2 className="deviceCount2">DEVICES</h2>
      <h2 className="deviceCount3">ONLINE</h2>

      <center>
        <div className="orbitsContainer">
          {Array(props.devices)
            .fill(null)
            .map((value, index) => (
              <span className={`orbit${index%5 +1}Circle circle randPos`} key={index}></span>
            ))}
        </div>
      </center>
    </div>
  );
}
