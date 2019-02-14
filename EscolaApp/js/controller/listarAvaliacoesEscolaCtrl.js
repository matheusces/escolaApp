var listarAvaliacoesEscolaCtrl = function($scope, $stateParams, $mdToast, escolaApi) {
  $scope.escolaAvaliacoes = [];
  $scope.codEscola = $stateParams.codEscola;

  $scope.listarAvaliacoesEscola = function(codEscola) {
    escolaApi.getListarAvaliacoesEscola(codEscola)
          .then(function (response) {
            // Toast
            var toast = $mdToast.simple()
                .textContent('As escolas foram listadas abaixo.')
                .position('top right')
                .action('OK')
                .hideDelay(6000)
                .toastClass('my-success');
            $mdToast.show(toast);

            $scope.escolaAvaliacoes = response.data;
          })
            .catch(function (error) {
                var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu na solicitação dos dados das escolas.')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000)
                    .toastClass('my-error');
                $mdToast.show(toast);

                console.error(error);
          });
  }

  let inicializarAvaliacao = function() {
    var codEscola = $stateParams.codEscola;
    console.log(codEscola);
  }

  inicializarAvaliacao();
};

escolaApp.controller("listarAvaliacoesEscolaCtrl", listarAvaliacoesEscolaCtrl);