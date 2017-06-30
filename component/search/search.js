define(['uiRouter'], function() {
			angular.module("searchModule", ['ui.router'])
				.config(function($stateProvider, $urlRouterProvider) {
					$stateProvider
						.state("search", {
							url: "/search",
							templateUrl: "component/search/search.html",
							controller: "searchCtrl",
							css: 'component/search/search.css'
						})
				})
				.controller("searchCtrl", ["$scope", '$http', function($scope, $http) {

					}])
				})