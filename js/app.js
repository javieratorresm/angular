var app = angular.module('angularSpa', [
    'ngRoute'
    ])
    .service('ConsultaService', function($http){
        var urlBase = 'http://jakane:8080/grupo_tbd2-master/tweets';
        this.getTweets = function(){
            return $http.get(urlBase);
        };
        this.getCompania = function(){
            return $http.get(urlBase+"/compañia/vtr");
        };
        this.getMovistar = function(){
            return $http.get(urlBase+"/compañia/movistar");
        };
         this.getEntel = function(){
            return $http.get(urlBase+"/compañia/entel");
        };
        this.getClaro = function(){
            return $http.get(urlBase+"/compañia/claro");
        };
        this.getWom = function(){
            return $http.get(urlBase+"/compañia/wom");
        };
        this.getCompaniacomuna = function(){
            return $http.get(urlBase+"/compañia/vtr/comuna/nuñoa");
        };
        //este es desde el 16 de octubre en adelante
         this.getfecha = function(){
            return $http.get(urlBase+"/compañia/vtr/periodo/inicio/16.10.2016");
        };
    })

    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/tweets',{
            templateUrl: 'views/tweets.html',
            controller: 'tweetsCtrl'
        })
        .when('/compania/vtr',{
            templateUrl: 'views/compania.html',
            controller: 'companiaCtrl'
        })
        .when('/compania/movistar',{
            templateUrl: 'views/movistar.html',
            controller: 'movistarCtrl'
        })
     .when('/compania/entel',{
            templateUrl: 'views/entel.html',
            controller: 'entelCtrl'
        })
     .when('/compania/claro',{
            templateUrl: 'views/claro.html',
            controller: 'claroCtrl'
        })
     .when('/compania/wom',{
            templateUrl: 'views/wom.html',
            controller: 'womCtrl'
        })
     .when('/compania/vtr/comuna/nunoa',{
            templateUrl: 'views/comuna.html',
            controller: 'vtrcomunaCtrl'
        })
     .when('/compania/vtr/fecha/16102016',{
            templateUrl: 'views/comuna.html',
            controller: 'fechaCtrl'
        })
        .otherwise({
            redirectTo: '/home'
          });
});
