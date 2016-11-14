app.controller('indiceCtrlVtr', function($scope,ConsultaService){
    $scope.indice = [



    ];
    

 function getindicevtr(){
            ConsultaService.getindicevtr()
            .success(function(data){
                $scope.indice = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
                console.log('error');
            });
        }
        getindicevtr();
});
