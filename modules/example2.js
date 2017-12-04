function example2 (){
  var url = "http://www.handbalstartpunt.nl/";
  var httpclient= new kony.net.HttpRequest();
  httpclient.responseType = constants.HTTP_RESPONSE_TYPE_TEXT;
  httpclient.onReadyStateChange = onReady;
  httpclient.open(constants.HTTP_METHOD_GET, url, false); // defines that you want to get a page at a certain way
  httpclient.send();
}

function onReady(){
  if (this.status == 200) {
    //when 200, the screen is there
    kony.application.getCurrentForm().TextArea0.text = this.response;
  }
  
}