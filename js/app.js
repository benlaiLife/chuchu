<<<<<<< HEAD
define(['uiRouter','9yuan9','shopCar','home','mine','category','classfiy','search','css','lazyLoad','swiper',"details","evaluate","recommend"],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','categoryModule','classfiyModule','me-lazyload',"detailsModule","evaluateModule","recommendModule","shopCarModule"])
=======
define(['uiRouter','9yuan9','shopCar','home','mine','category','search','css','lazyLoad','swiper',"details","evaluate","recommend"],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','searchModule','mineModule','categoryModule','me-lazyload',"detailsModule","evaluateModule","recommendModule","shopCarModule"])
>>>>>>> 110f5ea609daabb60cb846cf7c55f9640d836fa1
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
			
		})
});
