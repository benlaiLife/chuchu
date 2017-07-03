define(['uiRoute'],function(){
	angular.module('collectionModule',['ui.route','mineModule'])
		.config(function($stateProvider,$urlRouteProvider){
			$stateProvider
				.state('mine.collection',{
					url:'/collection',
					templateUrl:'component/mine/collection/collection.html',
					controller:'collectionCtrl',
					css:['component/mine/collection/collection.css','component/mine/mine.css']
				})
		})
		.controller('collectionCtrl',function($http,$scope){
			$scope.can = 'collection';
		})
})