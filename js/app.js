define(['uiRouter','9yuan9','shopCar','home','mine','category','classfiy','summerNew','search','css','lazyLoad','swiper',"details","evaluate","recommend"],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','categoryModule','classfiyModule','summerNewModule','me-lazyload',"detailsModule","evaluateModule","recommendModule","shopCarModule"])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
			
		})
});
