angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, cadastroDeFotos, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    //Pega o id da foto
    //fotoId é do main.js
    if($routeParams.fotoId) {

        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
            $scope.foto = foto;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possivel obter a foto';
        });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if(dados.inclusao) $scope.foto = {}; //Se for inclusao eu limpo os campos
            })
            .catch(function(dados) {
                $scope.mensagem = dados.mensagem;
            })
        }
    };
});