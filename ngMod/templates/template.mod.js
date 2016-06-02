angular.module('app', ['ui.router', 'ngAnimate', 'ngResource'])
    .config(configFunc).run(runFunc);


function configFunc($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise("/index");
    //
    //$stateProvider
    //    .state('index', {
    //        url: "/index",
    //        templateUrl: "partials/index.html",
    //        controller: 'IndexCtrl'
    //    });
}

function runFunc($templateRequest, $rootScope, $state) {

    //$rootScope.$on('$viewContentLoading', function (event, viewConfig) {
    //
    //})
}