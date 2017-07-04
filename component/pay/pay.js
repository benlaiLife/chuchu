define(['uiRouter'], function() {
	angular.module("payModule", ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("pay", {
					url: "/pay",
					templateUrl: "component/pay/pay.html",
					controller: "payCtrl",
					css: 'component/pay/pay.css'
				})
		})
		.controller('payCtrl',['$scope',function  ($scope) {
			
		}])
		})