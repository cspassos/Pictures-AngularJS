angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

    var ddo = {};

//AE -> Atributo / Element
    ddo.restric = "AE";
    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true; //Como as imagens são filho, o tranqclude vai fazer com que elas
                            //apareça

    ddo.templateUrl = 'js/directives/meu-painel.html'
                


    return ddo;
});