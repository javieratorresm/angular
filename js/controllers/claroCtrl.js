app.controller('claroCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
       function getClaro(){
            ConsultaService.getClaro()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getClaro();
});

