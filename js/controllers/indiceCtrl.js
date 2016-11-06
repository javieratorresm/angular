app.controller('indiceCtrl', function($scope,ConsultaService){
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
       
 function getindicemovistar(){
            ConsultaService.getindicemovistar()
            .success(function(data){
                $scope.indice = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
                console.log('error');
            });
        }
        getindicemovistar();

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