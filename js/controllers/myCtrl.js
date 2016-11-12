app.controller('myCtrl', function($scope,ConsultaService) {


  $scope.options = {
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
       var value = getDesaprobacionClaro();
       
       console.log('data culiaoooo',value);
        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Entel" ,
                        "value" : -29.765957771107
                    } ,
                    {
                        "label" : "Movistar" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "Claro" ,
                        "value" : getDesaprobacionClaro() 
                    } ,
                    {
                        "label" : "WOM" ,
                        "value" : 196.45946739256
                    } 
                   
                ]
            }
        ]
       function getDesaprobacionClaro(){
            ConsultaService.getindiceclaro()
            .success(function(data){
                val = parseInt(data.buenos);
                //console.log('data culiao',a);
                console.log(' que chucha =',val);
                return val;
 				
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
                console.log('error');
            });

            
        }
        console.log(getDesaprobacionClaro());

function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
       
});
