app.controller('lineChart', function($scope,ConsultaService) {
    var ctrl = this;
  ctrl.data = 0;

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
                                ctrl.data = [
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
                                        color: '#8b4513',
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


  ctrl.options = {
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

        

        /*Random Data Generator */
        function sinAndCos() {
            var sin = [],sin2 = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 1000; i++) {
                sin.push({x: i, y: Math.sin(i/10)});
                sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
                cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
            }
            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: sin,      //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ffffff',  //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                },
                {
                    values: sin2,
                    key: 'Another sine wave',
                    color: '#7777ff',
                    area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };

        

        
        
});
