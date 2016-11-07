app.controller('indiceCtrlMovistar', function($scope,ConsultaService){
    $scope.indice = [



    ];
       

       
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

});
