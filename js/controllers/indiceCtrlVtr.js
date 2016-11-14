app.controller('indiceCtrlVtr', function($scope,ConsultaService){
    
   $scope.data1 = 0;
    $scope.indice = [];
       
    function datosVtr(){
        ConsultaService.getindicevtr().then(function(vtr){
            $scope.data1 = [
                {
                    key: "Positivos",
                    y: vtr.data.buenos,
                    color: '#ef762b'
                },
                {
                    key: "Negativos",
                    y: vtr.data.malos,
                    color: '#f9e6c5'
                }
            ]
            $scope.indice = vtr.data;

        });
    }datosVtr();

    
       
       


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
