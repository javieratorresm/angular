app.controller('vtrCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
       function getVtr(){
            ConsultaService.getVtr()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getVtr();
});

