angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {
    //$scope = para o controler conseguir adicionar dados em minha view  
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro)
    });

    $scope.remover = function(foto) {
        
        recursoFoto.delete({fotoId : foto._id}, function() {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possivel remover a foto ' + foto.titulo;
        })
    };
}); 