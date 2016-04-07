angular.module('<%= name %>App')
    .factory('<%= name %>Fty', <%= name %>Fty);


function <%= name %>Fty() {

    var data = {};

    init();

    var svc = {
        data: data,
        query: query
    };
    return svc;


    function init() {
    }

    function query(params) {
    }
}