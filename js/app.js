
define(['uiRouter','9yuan9','shopCar','home','mine','category','classfiy','search','css','lazyLoad','lazyLoad','swiper',"details","evaluate","recommend","pay","collection",'summerNew'],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','categoryModule','me-lazyload',"detailsModule","evaluateModule","recommendModule","shopCarModule",'classfiyModule','payModule','summerNewModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
})
