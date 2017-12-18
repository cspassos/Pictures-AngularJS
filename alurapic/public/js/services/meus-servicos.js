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
 .factory('cadastroDeFotos', function(recursoFoto, $q) {

    var service = {};

    service.cadastrar = function(foto) {
        //resolve = sucess, quando tudo ocorre certo
        //reject = quando der erro
        return $q(function(resolve, reject) {
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function() {
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