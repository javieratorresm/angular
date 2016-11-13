app.controller('myCtrl', function($scope,ConsultaService,$q) {
    var vm = this;

        vm.data = 0;
        function getculiao(){
            ConsultaService.getindiceclaro().then(function(claro){
                ConsultaService.getindicemovistar().then(function(movistar){
                    ConsultaService.getindiceentel().then(function(entel){
                        ConsultaService.getindicewom().then(function(wom){
                            ConsultaService.getindicevtr().then(function(vtr){

                                       vm.data = [
                                                    {
                                                        key: "Cumulative Return",
                                                        values: [
                                                            {
                                                                "label" : "Entel" ,
                                                                "value" : entel.data.desaprobacion *100
                                                            } ,
                                                            {
                                                                "label" : "Movistar" ,
                                                                "value" : movistar.data.desaprobacion *100
                                                            } ,
                                                            {
                                                                "label" : "Claro" ,
                                                                "value" : claro.data.desaprobacion *100
                                                            } ,
                                                            {
                                                                "label" : "WOM" ,
                                                                "value" : wom.data.desaprobacion *100
                                                            } ,
                                                            {
                                                                "label" : "VTR" ,
                                                                "value" : vtr.data.desaprobacion *100
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
        getculiao();
        //console.log('test f(x) 333 = ',datito.buenos);

 

    vm.options = {
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
