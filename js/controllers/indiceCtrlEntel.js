app.controller('indiceCtrlEntel', function($scope,ConsultaService){
    $scope.indice = [



    ];
       
       function getindiceentel(){
            ConsultaService.getindiceentel()
            .success(function(data){
                $scope.indice = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
                console.log('error');
            });
        }
        getindiceentel();
});
