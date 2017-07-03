define(['uiRouter'], function() {
	angular.module("shopCarModule", ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("shopCar", {
					url: "/shopCar",
					templateUrl: "component/shopCar/shopCar.html",
//					controller: "searchCtrl",
					css: 'component/shopCar/shopCar.css'
				})
		})
		})