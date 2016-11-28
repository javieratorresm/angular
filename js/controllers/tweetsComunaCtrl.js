app.controller('tweetsComunaCtrl', function($scope,ConsultaService,comuna,compañia,$mdDialog){
	$scope.cargandoTweets = true;
	$scope.tweets = [];
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.comunaTweets = comuna;
    $scope.compañiaConsulta = compañia;


       function tweetsComuna(){
        console.log("Datos",$scope.comunaTweets,$scope.compañiaConsulta);
        if($scope.compañiaConsulta=="Todas"){
            ConsultaService.gettweetsComunaTodo($scope.comunaTweets).then(function(data){
                $scope.tweets = data.data;
                $scope.cargandoTweets = false;
                console.log($scope.tweets);
            });
        }
        else{
            ConsultaService.gettweetsComuna($scope.compañiaConsulta,$scope.comunaTweets).then(function(data){
                $scope.tweets = data.data;
                $scope.cargandoTweets = false;
                console.log($scope.tweets);
            });
        }
        
    }tweetsComuna();


});