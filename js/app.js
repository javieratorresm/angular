var app = angular.module('angularSpa', ['ngRoute','nvd3'])

    .service('ConsultaService', function($http,$q){
        var urlBase = 'http://localhost:8080/grupo_tbd2-master/tweets';
        this.getTweets = function(){
            return $http.get(urlBase);
        };
        this.getCompania = function(){
            return $http.get(urlBase+"/compañias/vtr");
        };
        this.getMovistar = function(){
            return $http.get(urlBase+"/compañias/movistar");
        };
         this.getEntel = function(){
            return $http.get(urlBase+"/compañias/entel");
        };
        this.getClaro = function(){
            return $http.get(urlBase+"/compañias/claro");
        };
        this.getWom = function(){
            return $http.get(urlBase+"/compañias/wom");
        };
        //comuna nuñoa de vtr
        this.getCompaniacomuna = function(){
            return $http.get(urlBase+"/compañias/vtr/comunas/nuñoa");
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
             this.getindiceclaro = function(){
            return $http.get(urlBase+"/indices/compañias/claro");
            //return ({method:"GET",async: false, url:urlBase+"/indices/compañias/claro"});
        };
             this.getindiceclaro1 = function(){
            var defered = $q.defer();
            //var promise = defered.promise;
            $http.get(urlBase+"/indices/compañias/claro")
                .success(function(data) {
                    defered.resolve(data);
                });

            return defered.promise;
        };

    })


    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controllerAs: 'vm',
            controller: 'myCtrl'
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
            templateUrl:'views/indice.html',
            controller:'indiceCtrlMovistar'

     })
     .when ('/indice/compania/vtr',{
            templateUrl:'views/indice.html',
            controller:'indiceCtrlVtr'

     })
      
       .when ('/indice/compania/wom',{
            templateUrl:'views/indice.html',
            controller:'indiceCtrlWom'

     })
        .when ('/indice/compania/entel',{
            templateUrl:'views/indice.html',
            controller:'indiceCtrlEntel'

     })
        .when ('/indice/compania/claro',{
            templateUrl:'views/indice.html',
            controller:'indiceCtrlClaro'

     })
        .otherwise({
            redirectTo: '/home'
          });
});
