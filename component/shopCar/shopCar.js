define(['uiRouter'], function() {
	angular.module("shopCarModule", ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("shopCar", {
					url: "/shopCar",
					templateUrl: "component/shopCar/shopCar.html",
					controller: "shopCarCtrl",
					css: 'component/shopCar/shopCar.css'
				})
		})
	.controller('shopCarCtrl',['$scope','$http',function ($scope,$http) {
//		$http.
		$scope.goodsChose=[false,false];
		$scope.storeChose=false;
//		商店选择
		$scope.store=function () {
			$scope.storeChose=!$scope.storeChose;
//			如果全选所有商品,则所有商品被选中
			if($scope.storeChose==true){
				for (var i = 0; i < $scope.goodsChose.length; i++) {
				$scope.goodsChose[i]=true;
			}
			}else{
				for (var j = 0; j < $scope.goodsChose.length; j++) {
				$scope.goodsChose[j]=false;
			}
			}
		}
//		单个商品选择
		$scope.storeItem=function(item) {
			for (var i = 0; i < $scope.goodsChose.length; i++) {
				if(item==i){
					if($scope.goodsChose[i]==false){
						$scope.goodsChose[i]=true;
					}else{
						$scope.goodsChose[i]=false;
					}
				}
			}
//			for (var j = 0; j < $scope.goodsChose.length; j++) {
//				if($scope.goodsChose[i]==false){
//					$scope.storeChose=false;
//				}else{
//					$scope.storeChose=true;
//				}
//			}
		}
	}])
})