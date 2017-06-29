define(['uiRouter','category','home','mine','shopcar','css'],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','categoryModule','homeModule','mineModule','shopcarModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
	;
});
