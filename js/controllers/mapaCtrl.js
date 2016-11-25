app.controller('mapaCtrl', function($scope,ConsultaService){

	
var mapOptions = {
    zoom: 11,
    scrollwheel: true,
    center: new google.maps.LatLng(-33.4378305, -70.65044920000003),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
    }
  };

  
  var infoWindow = new google.maps.InfoWindow({
    content: ""
  });

  
  $scope.map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

  
  var stateLayer = new google.maps.Data();
  stateLayer.loadGeoJson('Santiago.geojson');

  
  stateLayer.setStyle(function(feature) {
    return {
      fillColor: '#bbced0', 
      fillOpacity: 0.4,
      strokeColor: '#a9a9a9',
      strokeWeight: 1,
      zIndex: 1
    };
  });

  stateLayer.addListener('mouseover', function(e) {
    stateLayer.overrideStyle(e.feature, {
      fillColor: '#718f92',
      strokeColor: '#447296',
      strokeWeight: 2,
      zIndex: 2
    });
  });

  stateLayer.addListener('mouseout', function(e) {
    stateLayer.revertStyle();
  });

  stateLayer.addListener('click', function(e) {
    console.log(e);
    infoWindow.setContent('<div style="line-height:1.00;overflow:hidden;white-space:nowrap;">' +
      e.feature.getProperty('NOM_COM') + '</div>');

    var anchor = new google.maps.MVCObject();
    anchor.set("position", e.latLng);
    infoWindow.open($scope.map, anchor);
  });
  
  stateLayer.setMap($scope.map);


});