app.controller('indiceCtrlClaro', function($scope,ConsultaService){
    $scope.data1 = 0;
    $scope.indice = [];
       
    function datosClaro(){
        ConsultaService.getindiceclaro().then(function(claro){
            $scope.data1 = [
                {
                    key: "Positivos",
                    y: claro.data.buenos,
                    color: '#e31111'
                },
                {
                    key: "Negativos",
                    y: claro.data.malos,
                    color: '#f9c5c5'
                }
            ]

            $scope.indice = claro.data;

        });
    }datosClaro();



$scope.callback = function(scope, element){
  // Add a click event
  d3.selectAll('.nv-slice').on('click', function(){
    d3.selectAll('.nvtooltip').each(function(){
        console.log("APRIETATECTM")
        this.style.setProperty('display', 'block', 'important');
    });
  });
  // Clear tooltip on mouseout
  d3.selectAll('.nv-slice').each(function(){
    this.addEventListener('mouseout', function(){
        d3.selectAll('.nvtooltip').each(function(){
            this.style.setProperty('display', 'none', 'important');
        });
    }, false);
  });
  // we use foreach and event listener because the on('mouseout')
  // was overidding some other function
};

  
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