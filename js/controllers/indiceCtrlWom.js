app.controller('indiceCtrl', function($scope,ConsultaService){
    $scope.indice = [



    ];
    

 function getindicewom(){
            ConsultaService.getindicewom()
            .success(function(data){
                $scope.indice = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
                console.log('error');
            });
        }
        getindicewom();
});