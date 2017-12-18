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
})
.directive('meuBotaoPerigo', function() {
    var ddo = {};
    ddo.restric = "E";

    ddo.scope = {
        nome: '@',
        acao: '&' // quando se passa uma expressão utiliza &
        // Nesse caso na no principal.html eu estou passando um valor.
    };

    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>'

    return ddo;
})