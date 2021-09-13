import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../API/api-config';
import DeviceBottom from '../../components/DeviceBottom/DeviceBottom';
import DeviceOrbit from '../../components/DeviceOrbit/DeviceOrbit';
import { getToken, removeUserSession } from '../../Utils/Common';

function Devices(props) {
  const [devices, setDevices] = useState(0);

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/');
  }

  // handle click event of notify button
  const handleNotify = () => {
    const token = getToken();
    const headers = {
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const data = {
      name: "Ayon Roy",
      email: "royshouhag@gmail.com",
      repoUrl: "https://github.com/royayon/realtime-device-sync",
      message: "I'm gonna make him an offer he can't refuse.  - Godfather"
    };

    axios.post(API_URL + "/notify", data, {
      headers: headers
    }).then(response => {
      console.log("notify response---", response)
      alert("Test Complete 🎉");
    }).catch(error => {
      console.log("error login---", error.response)
      alert("Test Incomplete 💀");
    });
  }

  useEffect(() => {
    function getDevicesCount() {
      axios.get(API_URL + "/devices").then(response => {
        console.log("devices response---", response)
        // set the devices count state
        setDevices(response.data.devices.length);
      }).catch(error => {
        console.log("devices error login---", error.response)
      });
    }
    getDevicesCount()
    // polls every 5 seconds
    const interval = setInterval(() => getDevicesCount(), 5000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <DeviceOrbit devices={devices} />
      <DeviceBottom notify={handleNotify} logout={handleLogout} />
    </div>
  );
}

export default Devices;