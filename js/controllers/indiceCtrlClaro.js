app.controller('indiceCtrlClaro', function($scope,ConsultaService){
    $scope.indice = [];
       
       function getindiceClaro(){
            ConsultaService.getindiceclaro()
            .success(function(data){
                $scope.indice = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
                console.log('error');
            });
        }
        getindiceClaro();
});