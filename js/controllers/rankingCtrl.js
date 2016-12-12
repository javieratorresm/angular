app.controller('rankingCtrl', function($scope,ConsultaService,$q,$mdDialog){
	$scope.ranking = [];
	$scope.cargandoRanking = true;

	function obtenerRanking(){
            ConsultaService.getRanking().then(function(data){
                $scope.ranking = data.data;
                $scope.cargandoRanking = false;
                console.log("data",data);
                console.log("scope",$scope.ranking);
            });
    }obtenerRanking();
//name,screenname,background,profile,description

    $scope.mostrarUsuario= function(indice){
    	console.log("Indice: ",indice);
      $mdDialog.show({
                                locals: {
                                    name: $scope.ranking[indice].name,
                                    screenname: $scope.ranking[indice].screen_name,
                                    background:$scope.ranking[indice].background_image,
                                    profile:$scope.ranking[indice].profile_image,
                                    description:$scope.ranking[indice].description
                                },
                                controller: 'usuarioCtrl',
                                templateUrl: 'views/usuario.html',
                                parent: angular.element(document.body),
                                clickOutsideToClose:true
                            });
  };

});