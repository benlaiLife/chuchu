define(['uiRouter','9yuan9','home','mine','category','search','css','lazyLoad','swiper',"details","evaluate","recommend"],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','me-lazyload','categoryModule',"detailsModule","evaluateModule","recommendModule"])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
	;
});
