function initialize() {
  var myLatlng = new google.maps.LatLng(34.214537, -117.463741);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    MapTypeId: google.maps.MapTypeId.TERRAIN,
    scrollwheel: false,
    MapTypeControlStyle: google.maps.MapTypeControlStyle.DROPDOWN_MENU
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  var sanbagPoints = new google.maps.KmlLayer({
    url: 'http://steveleathers.github.io/sanbag-googlemap/sanbagPoints.kmz'
  });
  sanbagPoints.setMap(map);

  
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
  document.getElementById('legend'));
}

google.maps.event.addDomListener(window, 'load', initialize);
