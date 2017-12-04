function example3() {
  try {kony.accelerometer.retrieveCurrentAcceleration(onSuccessCallback, onFailureCallback);
  } catch (err) {alert("Accelerometer not supported");
                
            }}
function onSuccessCallback( accelerometerdata) {
  alert("X: " + accelerometerdata.x+"\nY: " + accelerometerdata.y+"\nZ: " + accelerometerdata.z);
}function onFailureCallback(error) {alert("Accelerometer is not supported in the device.");
                                   }