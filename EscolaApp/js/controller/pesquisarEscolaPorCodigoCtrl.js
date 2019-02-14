var pesquisarEscolaPorCodigoCtrl = function($scope, $stateParams, $mdToast, escolaApi) {
    $scope.escola = {};
    $scope.codEscola = $stateParams.codEscola;

    $scope.pesquisarEscolaPorCodigo = function(codEscola) {
        escolaApi.getPesquisarEscolaPorCodigo(codEscola)
              .then(function (response) {
                // Toast
                var toast = $mdToast.simple()
                    .textContent('A escola foi listada abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.escola = response.data;
              })
                .catch(function (error) {
                    var toast = $mdToast.simple()
                        .textContent('Algum problema ocorreu na solicitação dos dados da escola.')
                        .position('top right')
                        .action('OK')
                        .hideDelay(6000)
                        .toastClass('my-error');
                    $mdToast.show(toast);

                    console.error(error);
              });
    }
    
    let inicializarEscola = function() {
        var codEscola = $stateParams.codEscola;
        console.log(codEscola);
    }

    inicializarEscola();
};

escolaApp.controller("pesquisarEscolaPorCodigoCtrl", pesquisarEscolaPorCodigoCtrl);