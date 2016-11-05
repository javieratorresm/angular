app.controller('fechaCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
       function getfecha(){
            ConsultaService.getfecha()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getfecha();
});

