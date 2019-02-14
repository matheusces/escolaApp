var tipoAvaliacaoApi = function ($http) {

    var _getListarTipoAvaliacao = function() {
        return $http.get(baseUrl + "/rest/tiposavaliacao");
    };

    return {
        getListarTipoAvaliacao: _getListarTipoAvaliacao
    };
}

escolaApp.factory("tipoAvaliacaoApi", tipoAvaliacaoApi);