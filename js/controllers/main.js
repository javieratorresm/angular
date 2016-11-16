app.controller('main', function($scope,ConsultaService,$q) {

$scope.fin = new Date();
$scope.inicio = new Date($scope.fin.getFullYear(),
      $scope.fin.getMonth() - 1,
      $scope.fin.getDate());

$scope.data = 0;

console.log("Fecha: "+$scope.inicio.getDate()+" "+$scope.inicio.getMonth()+" "+$scope.inicio.getFullYear());
console.log("Fecha: "+$scope.fin.getDate()+" "+$scope.fin.getMonth()+" "+$scope.fin.getFullYear());
function valoresGrafico(){
            ConsultaService.getindiceclaroPeriodo($scope.inicio.getDate(),$scope.inicio.getMonth(),$scope.inicio.getFullYear(),$scope.fin.getDate(),$scope.fin.getMonth(),$scope.fin.getFullYear()).then(function(claro){
                ConsultaService.getindicemovistarPeriodo($scope.inicio.getDate(),$scope.inicio.getMonth(),$scope.inicio.getFullYear(),$scope.fin.getDate(),$scope.fin.getMonth(),$scope.fin.getFullYear()).then(function(movistar){
                    ConsultaService.getindiceentelPeriodo($scope.inicio.getDate(),$scope.inicio.getMonth(),$scope.inicio.getFullYear(),$scope.fin.getDate(),$scope.fin.getMonth(),$scope.fin.getFullYear()).then(function(entel){
                        ConsultaService.getindicewomPeriodo($scope.inicio.getDate(),$scope.inicio.getMonth(),$scope.inicio.getFullYear(),$scope.fin.getDate(),$scope.fin.getMonth(),$scope.fin.getFullYear()).then(function(wom){
                            ConsultaService.getindicevtrPeriodo($scope.inicio.getDate(),$scope.inicio.getMonth(),$scope.inicio.getFullYear(),$scope.fin.getDate(),$scope.fin.getMonth(),$scope.fin.getFullYear()).then(function(vtr){
                                console.log(movistar);
                                var movistarData=[],claroData=[],vtrData=[],womData=[],entelData=[];
                                var i = 1;
                                angular.forEach(movistar.data, function(value, key){
                                    movistarData.push({x: i,y: value.desaprobacion*100});
                                    console.log(value.desaprobacion);
                                    i = i+1;
                                 });

                                i=1
                                angular.forEach(entel.data, function(value, key){
                                    entelData.push({x: i,y: value.desaprobacion*100});
                                    console.log(value.desaprobacion);
                                    i = i+1;
                                 });

                                i=1
                                angular.forEach(vtr.data, function(value, key){
                                    vtrData.push({x: i,y: value.desaprobacion*100});
                                    console.log(value.desaprobacion);
                                    i = i+1;
                                 });

                                i=1
                                angular.forEach(wom.data, function(value, key){
                                    womData.push({x: i,y: value.desaprobacion*100});
                                    console.log(value.desaprobacion);
                                    i = i+1;
                                 });

                                i=1
                                angular.forEach(claro.data, function(value, key){
                                    claroData.push({x: i,y: value.desaprobacion*100});
                                    console.log(value.desaprobacion);
                                    i = i+1;
                                 });

                                console.log(movistarData);
                                console.log(claroData);
                                console.log(entelData);
                                console.log(vtrData);
                                console.log(womData);
                                $scope.data = [
                                    {
                                        values: movistarData,      
                                        key: 'Movistar', 
                                        color: '#9adc3e',
                                    },
                                    {
                                        values: claroData,      
                                        key: 'Claro', 
                                        color: '#e31111',
                                    },
                                    {
                                        values: vtrData,      
                                        key: 'VTR', 
                                        color: '#ef762b',
                                    },
                                    {
                                        values: womData,      
                                        key: 'WOM', 
                                        color: '#691f78',
                                    },
                                    {
                                        values: entelData,      
                                        key: 'Entel', 
                                        color: '#376b9e',
                                    }
                                ]
                            });
                        });
                    });
                });
            });
        }valoresGrafico();


  $scope.data1 = 0;
        function getDesaprobacion(){
            ConsultaService.getindiceclaro().then(function(claro){
                ConsultaService.getindicemovistar().then(function(movistar){
                    ConsultaService.getindiceentel().then(function(entel){
                        ConsultaService.getindicewom().then(function(wom){
                            ConsultaService.getindicevtr().then(function(vtr){

                                       $scope.data1 = [
                                                    {
                                                        key: "Cumulative Return",
                                                        values: [
                                                            {
                                                                "label" : "Entel" ,
                                                                "value" : entel.data.desaprobacion *100,
                                                                color: '#376b9e'
                                                            } ,
                                                            {
                                                                "label" : "Movistar" ,
                                                                "value" : movistar.data.desaprobacion *100, 
                                                                color: '#9adc3e'
                                                            } ,
                                                            {
                                                                "label" : "Claro" ,
                                                                "value" : claro.data.desaprobacion *100,
                                                                color: '#e31111'
                                                            } ,
                                                            {
                                                                "label" : "WOM" ,
                                                                "value" : wom.data.desaprobacion *100,
                                                                color: '#691f78'
                                                            } ,
                                                            {
                                                                "label" : "VTR" ,
                                                                "value" : vtr.data.desaprobacion *100,
                                                                color: '#ef762b'
                                                            } 
                                                           
                                                        ]
                                                    }
                                                ]
                            });
                        });
                    });
               });
            });
        }
        getDesaprobacion();      


  $scope.options = {
            chart: {
                type: 'lineWithFocusChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },

                interpolate: "cardinal",
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: false,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); },
                },
                lines: {   
                    dispatch: {   
                        elementClick: function(e){
                            console.log(e);
                        },
                        elementMouseover: function(e){ }
                    }
                },

                xAxis: {
                    axisLabel: 'Tiempo (Dias)'
                },
                yAxis: {
                    axisLabel: 'Reputación (Indice)',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },

                
                forceY: [0,0,110]
            },
            title: {
                enable: true,
                text: 'Desaprobación a traves del tiempo.'
            },
            subtitle: {
                enable: true,
                text: 'Muestra una comparación del indice de desaprobación de las compañias durante un periodo de tiempo.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: false,
                html: '',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            },
            styles: {
                css:{
                    
                }
            }
        };

        
$scope.options1 = {
                chart: {
                    type: 'discreteBarChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 50,
                        left: 55
                    },
                    x: function(d){return d.label;},
                    y: function(d){return d.value + (1e-10);},
                    showValues: true,
                    valueFormat: function(d){
                        return d3.format(',.4f')(d);
                    },
                    duration: 1000,
                    xAxis: {
                        axisLabel: 'Compañias'
                    },
                    yAxis: {
                        axisLabel: 'Porcentaje Desaprobación',
                        axisLabelDistance: -10
                    }
                }
            };
        

        

        
        
});
