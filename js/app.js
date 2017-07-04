<<<<<<< HEAD
define(['uiRouter','9yuan9','shopCar','home','mine','category','search','css','lazyLoad','swiper',"details","evaluate","recommend","collection"],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','categoryModule','me-lazyload',"detailsModule","evaluateModule","recommendModule","shopCarModule",,"collectionModule"])
=======
define(['uiRouter','9yuan9','shopCar','home','mine','category','classfiy','search','css','lazyLoad','swiper',"details","evaluate","recommend","pay"],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','categoryModule','me-lazyload',"detailsModule","evaluateModule","recommendModule","shopCarModule",'classfiyModule','payModule'])
>>>>>>> 2ee015f22ac5a914d86ae2c7d56496626b757be6
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
});
