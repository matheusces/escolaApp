escolaApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var homeState = {
        url: '/home',
        templateUrl: 'home.html'
    };

    var listarEscolasState = {
        url: '/listar',
        templateUrl: 'listarEscolas.html',
        controller: 'listarEscolasCtrl'
    };

    var listarAvaliacaoMediaState = {
        url: '/listarAvaliacaoMedia',
        templateUrl: 'listarAvaliacaoMedia.html',
        controller: 'listarAvaliacaoMediaCtrl'
    };

    var listarTipoAvaliacaoState = {
        url: '/listarTipoAvaliacao',
        templateUrl: 'listarTipoAvaliacao.html',
        controller: 'listarTipoAvaliacaoCtrl'
    };

    var pesquisarEscolaPorAnoState = {
        url: "/pesquisarEscolaPorAno",
        templateUrl: "pesquisarEscolaPorAno.html",
        controller: "pesquisarEscolaPorAnoCtrl"
    };

    var pesquisarEscolaPorCodigoState = {
        url: "/escolas/:codEscola",
        templateUrl: "pesquisarEscolaPorCodigo.html",
        controller: "pesquisarEscolaPorCodigoCtrl"
    };

    var listarAvaliacaoPorTipoState = {
            url: "/listarAvaliacaoPorTipo",
            templateUrl: "listarAvaliacaoPorTipo.html",
            controller: "listarAvaliacaoPorTipoCtrl"
    };

    var listarAvaliacoesEscolaState = {
            url: "/avaliacoes/:codEscola",
            templateUrl: "listarAvaliacoesEscola.html",
            controller: "listarAvaliacoesEscolaCtrl"
    };
    
    var pesquisarEscolaPeloNomeState =  {
        url: "/pesquisarEscolaPeloNome",
        templateUrl: "pesquisarEscolaPeloNome.html",
        controller: "pesquisarEscolaPeloNomeCtrl"
    };
    
    var pesquisarAvaliacaoDoAnoPorTipoState = {
        url: "/pesquisarAvaliacaoDoAnoPorTipo",
        templateUrl: "pesquisarAvaliacaoDoAnoPorTipo.html",
        controller: "pesquisarAvaliacaoDoAnoPorTipoCtrl"
    };
    
    var pesquisarMediaAvaliacaoPorAnoState = {
        url: "/pesquisarMediaAvaliacaoPorAno",
        templateUrl: "pesquisarMediaAvaliacaoPorAno.html",
        controller: "pesquisarMediaAvaliacaoPorAnoCtrl"
    };
    
    var pesquisarAvaliacaoDeUmaEscolaPorAnoState = {
        url: "/pesquisarAvaliacaoDeUmaEscolaPorAno",
        templateUrl: "pesquisarAvaliacaoDeUmaEscolaPorAno.html",
        controller: "pesquisarAvaliacaoDeUmaEscolaPorAnoCtrl"
    }

    $stateProvider.state("home", homeState);
    $stateProvider.state("listarEscolas", listarEscolasState);
    $stateProvider.state("listarAvaliacaoMedia", listarAvaliacaoMediaState);
    $stateProvider.state("listarTipoAvaliacao", listarTipoAvaliacaoState);
    $stateProvider.state("pesquisarEscolaPorAno", pesquisarEscolaPorAnoState);
    $stateProvider.state("pesquisarEscolaPorCodigo", pesquisarEscolaPorCodigoState);
    $stateProvider.state("listarAvaliacaoPorTipo", listarAvaliacaoPorTipoState);
    $stateProvider.state("listarAvaliacoesEscola", listarAvaliacoesEscolaState);
    $stateProvider.state("pesquisarEscolaPeloNome", pesquisarEscolaPeloNomeState);
    $stateProvider.state("pesquisarAvaliacaoDoAnoPorTipo", pesquisarAvaliacaoDoAnoPorTipoState);
    $stateProvider.state("pesquisarMediaAvaliacaoPorAno", pesquisarMediaAvaliacaoPorAnoState);
    $stateProvider.state("pesquisarAvaliacaoDeUmaEscolaPorAno", pesquisarAvaliacaoDeUmaEscolaPorAnoState);
});