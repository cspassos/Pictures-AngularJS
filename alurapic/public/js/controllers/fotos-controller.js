angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    //$scope = para o controler conseguir adicionar dados em minha view  
    $scope.fotos = [];
    $scope.filtro = '';
    
    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    });
    /*
    var promise = $http.get('v1/fotos');
    promise.then(function(retorno){ //Assim que terminar de consultar as fotos ele executa 
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });*/

}); 