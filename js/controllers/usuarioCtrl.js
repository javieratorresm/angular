app.controller('usuarioCtrl', function($scope,ConsultaService,name,screenname,background,profile,description,$mdDialog){
    
    $scope.nombre = name;
    $scope.screen = screenname;
    $scope.bg = background;
    $scope.prof = profile;
    $scope.des = description;
    $scope.tweets = [];

    console.log("nombre: ",$scope.nombre);
    console.log("bg: ",$scope.bg);
    console.log("prof: ",$scope.prof);
    console.log("des: ",$scope.des);
    $scope.cancel = function() {
      $mdDialog.cancel();
    };


       function tweetsUsuario(){
        ConsultaService.gettweetsUsuario(name).then(function(data){
            $scope.tweets = data.data;
            console.log($scope.tweets);
        });
    }tweetsUsuario();


});