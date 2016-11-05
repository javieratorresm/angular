app.controller('womCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
       function getWom(){
            ConsultaService.getWom()
            .success(function(data){
                $scope.compania = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getWom();
});