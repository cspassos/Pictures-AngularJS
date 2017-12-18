 angular.module('meusServicos', ['ngResource'])
//retorna um objeto
 .factory('recursoFoto', function($resource) {
    return $resource('v1/fotos/:fotoId', null, {
        update : {
            method: 'PUT'
        }
    });
 })
 //$q -> permite criar promise(promessas)
 //$rootScope - > tem  acesso a todos os $scope;
 .factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {

    var service = {};
    var evento = 'fotoCadastrada';

    service.cadastrar = function(foto) {
        //resolve = sucess, quando tudo ocorre certo
        //reject = quando der erro
        return $q(function(resolve, reject) {
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function() {
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + ' alterada com sucesso',
                        inclusao: false
                    });

                }, function(erro) {
                    console.log('erro');
                    reject({
                        mensagem : 'Não foi possível alterar a foto ' + foto.titulo
                    });
                });
            
            } else {
                recursoFoto.save(foto, function() {
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem : 'Foto cadastrada com sucesso',
                        inclusao: true
                    });
                }, function(erro) {
                    console.log('erro');
                    reject({
                        mensagem : 'Não foi possível cadastrar a foto'
                    });
                });
            }
        });
    };
    return service;
 });