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
		$scope.goodsNum=[1,1];
		$scope.goodsChose=[false,false];
		$scope.allChose=false;
//		单个商品选择
		$scope.storeItem=function(item) {
			var num=0;
			for (var i = 0; i < $scope.goodsChose.length; i++) {
				if(item==i){
					if($scope.goodsChose[i]==false){
						$scope.goodsChose[i]=true;
					}else{
						$scope.goodsChose[i]=false;
					}
				}
			}
			for (var j = 0; j < $scope.goodsChose.length; j++) {
				if($scope.goodsChose[j]==true){
					num++;
					if(num==$scope.goodsChose.length){
						$scope.allChose=true;
					}
				}
				else{
					$scope.allChose=false;
				}
			}
		}
//		全选/全不选
		$scope.choseAll=function () {
			$scope.allChose=!$scope.allChose;
			if($scope.allChose==true){
				state(true);
			}else{
				state(false);
			}
		}
//		增加数量
		$scope.add=function (n) {
			for (var i = 0; i < $scope.goodsNum.length; i++) {
				if(i==n){
					$scope.goodsNum[i]++;
				}
			}
		}
		//减少数量
		$scope.dec=function (n) {
			for (var i = 0; i < $scope.goodsNum.length; i++) {
				if(i==n){
					$scope.goodsNum[i]--;
					if($scope.goodsNum[i]<=1){
						$scope.goodsNum[i]=1;
					}
				}
			}
		}
		function state(res){
			for (var i = 0; i <$scope.goodsChose.length; i++) {
				$scope.goodsChose[i]=res;
			}
		}
	}])
})

