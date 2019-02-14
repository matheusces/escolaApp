var escolaApi = function($http) {
    
    var _getListarAvaliacaoMedia = function(codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/media");
    };
    
    var _getListarEscolas = function() {
        return $http.get(baseUrl + "/rest/escolas/");
    };
    
    var _getPesquisarEscolaPorAno = function(codEscola, anoEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + anoEscola);
    };
    
    var _getPesquisarEscolaPorCodigo = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola);
    };
    
    var _getPesquisarEscolaPeloNome = function (nomeEscola){
        return $http.get(baseUrl + "/rest/escolas?nome=" + nomeEscola);
    };
    
    
    var _getPesquisarAvaliacaoDeUmaEscolaPorAno = function(codEscola, ano){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano);
    };
    
    var _getListarAvaliacaoPorTipo = function (cod, tipo) {
          return $http.get(baseUrl + "/rest/escolas/"+ cod +"/avaliacoes/tipo/" + tipo);
    };
    
    var _getListarAvaliacoesEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes");
    };
    
    var _getPesquisarAvaliacaoDoAnoPorTipo = function (codEscola, ano, tipo){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/tipo/" + tipo);
    };
    
    var _getPesquisarMediaAvaliacaoPorAno = function(codEscola, ano){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/media");
    };
    
    return {
        getListarAvaliacaoMedia: _getListarAvaliacaoMedia,
        getListarEscolas: _getListarEscolas,
        getPesquisarEscolaPorAno: _getPesquisarEscolaPorAno,
        getPesquisarEscolaPorCodigo: _getPesquisarEscolaPorCodigo,
        getPesquisarEscolaPeloNome: _getPesquisarEscolaPeloNome,
        getPesquisarAvaliacaoDeUmaEscolaPorAno: _getPesquisarAvaliacaoDeUmaEscolaPorAno,
        getListarAvaliacaoPorTipo: _getListarAvaliacaoPorTipo,
        getListarAvaliacoesEscola: _getListarAvaliacoesEscola,
        getPesquisarAvaliacaoDoAnoPorTipo: _getPesquisarAvaliacaoDoAnoPorTipo,
        getPesquisarMediaAvaliacaoPorAno: _getPesquisarMediaAvaliacaoPorAno
    };
}

escolaApp.factory("escolaApi", escolaApi);