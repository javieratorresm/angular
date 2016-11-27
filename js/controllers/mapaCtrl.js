app.controller('mapaCtrl', function($scope,ConsultaService,$q){

$scope.datos = [];
$scope.tweets = [];
$scope.compañia = "Todos";
$scope.map = 0;

$scope.coloresEntel = ['#f7fbff',
                        '#deebf7',
                        '#c6dbef',
                        '#9ecae1',
                        '#6baed6',
                        '#4292c6',
                        '#2171b5',
                        '#08519c',
                        '#08306b'];

$scope.coloresMovistar = ['#f7fcf5',
                        '#e5f5e0',
                        '#c7e9c0',
                        '#a1d99b',
                        '#74c476',
                        '#41ab5d',
                        '#238b45',
                        '#006d2c',
                        '#00441b'];


$scope.coloresClaro = ['#fff5f0',
                        '#fee0d2',
                        '#fcbba1',
                        '#fc9272',
                        '#fb6a4a',
                        '#ef3b2c',
                        '#cb181d',
                        '#a50f15',
                        '#67000d'];

$scope.coloresWom = ['#fcfbfd',
                        '#efedf5',
                        '#dadaeb',
                        '#bcbddc',
                        '#9e9ac8',
                        '#807dba',
                        '#6a51a3',
                        '#54278f',
                        '#3f007d'];

$scope.coloresVtr = ['#fff5eb',
                        '#fee6ce',
                        '#fdd0a2',
                        '#fdae6b',
                        '#fd8d3c',
                        '#f16913',
                        '#d94801',
                        '#a63603',
                        '#7f2704'];

$scope.coloresTodo = ['#ffffff',
                        '#f0f0f0',
                        '#d9d9d9',
                        '#bdbdbd',
                        '#969696',
                        '#737373',
                        '#525252',
                        '#252525',
                        '#000000'];


function mapaCalor(){
      console.log("Datos del controlador:",$scope.datos);
      var mapOptions = {
    zoom: 11,
    scrollwheel: true,
    center: new google.maps.LatLng(-33.47039910425852, -70.6475830078125),
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

  
  //$scope.map.data = new google.maps.Data();
  $scope.map.data.loadGeoJson('datosGeo/SoloSantiago.geojson');
  $scope.map.data.loadGeoJson('datosGeo/san_bernardo.geojson');
  $scope.map.data.loadGeoJson('datosGeo/puente_alto.geojson');
  $scope.map.data.loadGeoJson('datosGeo/calera_de_tango.geojson');
  $scope.map.data.loadGeoJson('datosGeo/padre_hurtado.geojson');
  
  $scope.map.data.setStyle(function(feature){
      console.log("Cambio en el estilo");
      var color = getColor(feature.getProperty('NOM_COM'));
      console.log("Color:",color);
      return {
            fillColor: color, 
            fillOpacity: 0.5,
            strokeColor: '#787878',
            strokeWeight: 1,
            zIndex: 1
      }; 
  });
  console.log($scope.map.data);

  $scope.map.data.addListener('mouseover', function(e) {
      console.log(e.feature.getProperty('NOM_COM')+" : "+e.feature.getProperty('COD_COMUNA'))
    $scope.map.data.overrideStyle(e.feature, {
      fillColor: '#718f92',
      strokeColor: '#447296',
      strokeWeight: 2,
      zIndex: 2
    });

  });

  $scope.map.data.addListener('mouseout', function(e) {
    $scope.map.data.revertStyle();
  });

  $scope.map.data.addListener('click', function(e) {
    console.log(e);
    infoWindow.setContent('<div style="line-height:1.00;overflow:hidden;white-space:nowrap;">' +
      e.feature.getProperty('NOM_COM') + ' : ' +$scope.datos[0].desaprobacion+'</div>');

    var anchor = new google.maps.MVCObject();
    anchor.set("position", e.latLng);
    infoWindow.open($scope.map, anchor);
  });
  console.log("RENDER");

};

	


  function getDatos(){
      if($scope.compañia == "Todos"){
            ConsultaService.getIndicesComunasTodas().then(function(indices){
                  $scope.datos = indices;
                  mapaCalor();
            });
            
      }
      else{
            ConsultaService.getIndicesComunasCompañias($scope.compañia).then(function(indices){
                  console.log(indices);
                  $scope.datos = indices;
            });
      }
      
  }getDatos();


  function getColor(comuna){
      var color = '';
      var arregloColores = [];
      if($scope.compañia == "Todos"){
            arregloColores = $scope.coloresTodo;
      }
      else if($scope.compañia == "Movistar"){
            arregloColores = $scope.coloresMovistar;
      }
      else if($scope.compañia == "Claro"){
            arregloColores = $scope.coloresClaro;
      }
      else if($scope.compañia == "Entel"){
            arregloColores = $scope.coloresEntel;
      }
      else if($scope.compañia == "Vtr"){
            arregloColores = $scope.coloresVtr;
      }
      else if($scope.compañia == "Wom"){
            arregloColores = $scope.coloresWom;
      }
      angular.forEach($scope.datos, function(value, key){
            if(comuna == value.comuna){
                  if(value.desaprobacion*100<=11){
                        console.log("1");
                        console.log($scope.coloresMovistar[0]);
                        color = arregloColores[0];
                  }
                  else if(value.desaprobacion*100<=22 && value.desaprobacion*100 >11){
                        console.log("2");
                        console.log($scope.coloresMovistar[1]);
                        color = arregloColores[1];
                  }
                  else if(value.desaprobacion*100<=33 && value.desaprobacion*100 >22){
                        console.log("3");
                        console.log($scope.coloresMovistar[2]);
                        color = arregloColores[2];
                  }
                  else if(value.desaprobacion*100<=44 && value.desaprobacion*100 >33){
                        console.log("4");
                        console.log($scope.coloresMovistar[3]);
                        color = arregloColores[3];
                  }
                  else if(value.desaprobacion*100<=55 && value.desaprobacion*100 >44){
                        console.log("5");
                        console.log($scope.coloresMovistar[4]);
                        color = arregloColores[4];
                  }
                  else if(value.desaprobacion*100<=66 && value.desaprobacion*100 >55){
                        console.log("6");
                        console.log($scope.coloresMovistar[5]);
                        color = arregloColores[5];
                  }
                  else if(value.desaprobacion*100<=77 && value.desaprobacion*100 >66){
                        console.log("7");
                        console.log($scope.coloresMovistar[6]);
                        color = arregloColores[6];
                  }
                  else if(value.desaprobacion*100<=88 && value.desaprobacion*100 >77){
                        console.log("8");
                        console.log($scope.coloresMovistar[7]);
                        color = arregloColores[7];
                  }
                  else if(value.desaprobacion*100<=100 && value.desaprobacion*100 >88){
                        console.log("9");
                        console.log($scope.coloresMovistar[8]);
                        color = arregloColores[8];
                  }  
            }
      });
      return color;
  };

});