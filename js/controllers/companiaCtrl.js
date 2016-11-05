app.controller('companiaCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
       function getCompania(){
            ConsultaService.getCompania()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getCompania();


});



