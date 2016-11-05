app.controller('movistarCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
       function getMovistar(){
            ConsultaService.getMovistar()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getMovistar();
});

