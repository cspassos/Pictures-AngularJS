angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, $routeParams) {

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
            if ($scope.foto._id){
                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function() {
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso';
                }, function(erro) {
                    console.log(erro)
                    $scope.mensagem = 'Não foi possivel alterar a foto ' + $scope.foto.titulo;
                });
            }else {
                recursoFoto.save($scope.foto, function() {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possivel incluir foto';
                });
            }
        }
    };
});