app.controller('main', function($scope,ConsultaService,$q) {

$scope.data = 0;
function valoresGrafico(){
            ConsultaService.getindiceclaroPeriodo(1,10,2016,13,11,2016).then(function(claro){
                ConsultaService.getindicemovistarPeriodo(1,10,2016,13,11,2016).then(function(movistar){
                    ConsultaService.getindiceentelPeriodo(1,10,2016,13,11,2016).then(function(entel){
                        ConsultaService.getindicewomPeriodo(1,10,2016,13,11,2016).then(function(wom){
                            ConsultaService.getindicevtrPeriodo(1,10,2016,13,11,2016).then(function(vtr){
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
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: false,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
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
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                },
                forceY: [0,0,100]
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
                    duration: 500,
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
