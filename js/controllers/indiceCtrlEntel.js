app.controller('indiceCtrlEntel', function($scope,ConsultaService){
    
    $scope.data1 = 0;
    $scope.indice = [];
       
    function datosEntel(){
        ConsultaService.getindiceentel().then(function(entel){
            $scope.data1 = [
                {
                    key: "Positivos",
                    y: entel.data.buenos
                },
                {
                    key: "Negativos",
                    y: entel.data.malos
                }
            ]
            $scope.indice = entel.data;

        });
    }datosEntel();

    
       

        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
});
