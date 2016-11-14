app.controller('indiceCtrlWom', function($scope,ConsultaService){
    
    $scope.data1 = 0;
    $scope.indice = [];
       
    function datosWom(){
        ConsultaService.getindicewom().then(function(wom){
            $scope.data1 = [
                {
                    key: "Positivos",
                    y: wom.data.buenos,
                    color: '#691f78'
                },
                {
                    key: "Negativos",
                    y: wom.data.malos,
                    color: '#ecb0fc'
                }
            ]
            $scope.indice = wom.data;

        });
    }datosWom();

    
       
      


        $scope.options= {
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
