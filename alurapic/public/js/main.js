angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/fotos', {
         //Quando a url for http://localhost:3000/#/fotos executa o 
         // partials/principal.html
        templateUrl: 'partials/principal.html',
        //E executa o controler 'FotosController'
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });
    //Caso Contrario, caso ele digite uma url invalida ele leva para /fotos 
    $routeProvider.otherwise({ redirectTo: '/fotos'});
});