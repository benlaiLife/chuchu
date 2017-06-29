define(['uiRouter','9yuan9','home','mine','category','css'],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','9yuan9Module','homeModule','mineModule','categoryModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
	;
});
