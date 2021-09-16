import React from "react";
import "./DeviceOrbit.css";

export default function DeviceOrbit(props) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const angleList = [];
  for (let itm = 0; itm < props.devices; itm++) {
    angleList.push(itm * (360 / props.devices));
  }

  return (
    <div className="deviceBody">
      <div className="deviceCountBody">
        <div className="deviceCount">{props.devices}</div>
        <div className="deviceCount2">DEVICES</div>
        <div className="deviceCount3">ONLINE</div>
      </div>
      <center>
        <div className="orbitsContainer">
          {/* {Array(props.devices)
            .fill(null)
            .map((value, index) => (
              <span className={`orbit1Circle circle randPos`} key={index} style={{'--deg': `${index*30+15}deg`, '--cdeg':`${360+(index*30+15)}deg`}}></span>
            ))} */}

          {angleList.map((value, index) => (
            <span
              className={`orbit1Circle circle`}
              key={`${index}-RAND-${getRandomInt(1, 9999)}`}
              style={{
                "--deg": `${value}deg`,
                "--cdeg": `${360 + value}deg`,
              }}
            ></span>
          ))}
        </div>
      </center>
    </div>
  );
}
