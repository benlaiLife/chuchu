define(['uiRouter'], function() {
    angular.module("collectionModule", ['ui.router',"mineModule"])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("mine.collection", {
                    url: "/collection",
                    templateUrl: "component/mine/collection/collection.html",
                    controller: "collectionCtrl",
                    css: ["component/mine/collection/collection.css",'component/mine/mine.css']
                })
        })
		.controller("collectionCtrl",["$scope","$http","$state",function ($scope,$http,$state) {
           
        }])
})