app.controller('tweetsFechaCtrl', function($scope,ConsultaService,fecha,compañia,$mdDialog){
	$scope.tweets = [];
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.fechaTweets = fecha;
    $scope.compañiaConsulta = compañia;
    console.log($scope.fechaTweets);
    console.log($scope.fechaTweets.getMonth());
    console.log($scope.fechaTweets.getDate());
    console.log($scope.fechaTweets.getFullYear());


       function tweetsDia(){
        ConsultaService.gettweetsDia($scope.compañiaConsulta,$scope.fechaTweets.getDate(),$scope.fechaTweets.getMonth()+1,$scope.fechaTweets.getFullYear()).then(function(data){
            $scope.tweets = data.data;
            console.log($scope.tweets);

        });
    }tweetsDia();


});