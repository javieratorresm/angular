app.controller('tweetsCtrl', function($scope,ConsultaService){
    $scope.tweets = [



    ];
       function getTweets(){
            ConsultaService.getTweets()
            .success(function(data){
                $scope.tweets = data;
                                console.log('data',data);
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
                console.log('error');
            });
        }
        getTweets();
});

