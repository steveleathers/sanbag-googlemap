function initialize() {
  var myLatlng = new google.maps.LatLng(34.125148, -117.494458);
  var mapOptions = {
    zoom: 13,
    center: myLatlng,
    MapTyleId: google.maps.MapTypeId.SATELLITE
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  var sanbagPoints = new google.maps.KmlLayer({
    url: 'http://steveleathers.github.io/sanbag-googlemap/sanbagPoints.kml'
  });
  sanbagPoints.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);