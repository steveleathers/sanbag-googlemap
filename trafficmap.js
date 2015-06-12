function initialize() {
  var myLatlng = new google.maps.LatLng(34.214537, -117.463741);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    MapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    preserveViewport: true
  }
  var layerOptions = {preserveViewport: true};
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var url_1 = "http://steveleathers.github.io/sanbag-googlemap/sanbagPoints.kmz";
  var layers = {
    "layer_1": {
      "layer" : new google.maps.KmlLayer(url_1, layerOptions),
      "label" : "Sanbag Points"
    }
  };

  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
  document.getElementById('legend'));

  layers['layer_1']['layer'].setMap(null);

  layers['layer_1']['layer'].toggleState = 0;

  $('#layer-1-header').addClass('off');

  function toggleLayer(i) {
    layer = layers[i]['layer'];
    if (layer.toggleState == 1) {
      layer.setMap(null);
      layer.toggleState = 0;
    }
    else {
      layer.setMap(map);
      layer.toggleState = 1;
    }
  }


  $('#layer-1-header').click( function() {
    $('#layer-1-header').toggleClass('on');
    toggleLayer('layer_1');
  } );


}

google.maps.event.addDomListener(window, 'load', initialize);
