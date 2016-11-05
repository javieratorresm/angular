app.controller('vtrcomunaCtrl', function($scope,ConsultaService){
    $scope.compania = [



    ];
        function getCompaniacomuna(){
            ConsultaService.getCompaniacomuna()
            .success(function(data){
                $scope.compania = data;
                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
            }
        getCompaniacomuna();
          
});
