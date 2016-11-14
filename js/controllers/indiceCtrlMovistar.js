app.controller('indiceCtrlMovistar', function($scope,ConsultaService){
    
    $scope.data1 = 0;
    $scope.indice = [];
       
    function datosMovistar(){
        ConsultaService.getindicemovistar().then(function(movistar){
            $scope.data1 = [
                {
                    key: "Positivos",
                    y: movistar.data.buenos,
                    color: '#9adc3e'
                },
                {
                    key: "Negativos",
                    y: movistar.data.malos,
                    color: '#c8f9c5'
                    
                }
            ]
            $scope.indice = movistar.data;


        });
    }datosMovistar();

    

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
