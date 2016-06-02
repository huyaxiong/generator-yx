angular.module('app')
    .directive('<%= name %>', <%= name %>Drt);


function <%= name %>Drt() {

    var directive = {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '<%= name %>.drt.html',
        link: linkFunc
    };
    return directive;


    function linkFunc(scope, element, attrs) {

    }
}