app.controller('entelCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
       function getEntel(){
            ConsultaService.getEntel()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getEntel();
          function getEntelcomuna(){
            ConsultaService.getEntelcomuna()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getEntelcomuna();
});

