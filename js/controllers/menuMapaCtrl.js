app.controller('menuMapaCtrl', function($scope, $mdBottomSheet) {

	$scope.items = [
    { name: 'Todas', icon: 'todas' },
    { name: 'Movistar', icon: 'movistar' },
    { name: 'Entel', icon: 'entel' },
    { name: 'Claro', icon: 'claroTitle' },
    { name: 'Vtr', icon: 'vtr' },
    { name: 'Wom', icon: 'womTitle' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem['name']);
  };

});