var listarAvaliacaoPorTipoCtrl = function($scope, $mdToast, escolaApi) {
        $scope.avaliacoes = [];
        $scope.listarAvaliacaoPorTipo = function(cod, tipo) {
          escolaApi.getListarAvaliacaoPorTipo(cod, tipo)
                .then(function (response) {
                    // Toast
                var toast = $mdToast.simple()
                    .textContent('Os Tipos de Avaliação foram listados abaixo.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-success');
                $mdToast.show(toast);

                $scope.avaliacoes = response.data;
            })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados dos Tipos de Avaliação.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);
        
                console.error(error);
              });
      }
};

escolaApp.controller("listarAvaliacaoPorTipoCtrl", listarAvaliacaoPorTipoCtrl);