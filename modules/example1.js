function example1(){
  alert("Wait for it....");
  kony.timer.schedule("refreshTimer",refreshTimerFunc,10,true);
}
  function refreshTimerFunc() {
    alert("refresh...");
  }
         