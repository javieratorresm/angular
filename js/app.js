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
        //comuna nuñoa de vtr
        this.getCompaniacomuna = function(){
            return $http.get(urlBase+"/compañias/vtr/comuna/nuñoa");
        };
        //este es desde el 16 de octubre en adelante
         this.getfecha = function(){
            return $http.get(urlBase+"/compañias/vtr/periodos/inicio/16.10.2016");
        };
                 this.getindiceentel = function(){
            return $http.get(urlBase+"/indices/compañias/entel");
        };
                 this.getindicevtr= function(){
            return $http.get(urlBase+"/indices/compañias/vtr");
        };
                 this.getindicemovistar = function(){
            return $http.get(urlBase+"/indices/compañias/movistar");
        };
               this.getindicewom = function(){
            return $http.get(urlBase+"/indices/compañias/wom");
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
     .when ('/indice/compania/movistar',{
            templateUrl:'views/movistarindice.html',
            controller:'indiceCtrl'

     })
     .when ('/indice/compania/vtr',{
            templateUrl:'views/indice.html',
            controller:'indiceCtrl'

     })
      
       .when ('/indice/compania/wom',{
            templateUrl:'views/womindice.html',
            controller:'indiceCtrl'

     })
        .when ('/indice/compania/entel',{
            templateUrl:'views/indice.html',
            controller:'indiceCtrl'

     })
        .otherwise({
            redirectTo: '/home'
          });
});
