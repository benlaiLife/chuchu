define(['uiRouter','9yuan9','home','mine','category','search','classfiy','css','lazyLoad','swiper',"details","evaluate","recommend"],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','categoryModule','classfiyModule','me-lazyload',"detailsModule","evaluateModule","recommendModule"])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
	;
});
