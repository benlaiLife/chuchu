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
	.controller('shopCarCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
		$scope.shopInfo=JSON.parse(localStorage.getItem('aaaa'));
		$scope.allPrice=0;
		$scope.allCount=0;
		$scope.allGoodsState=false;
		$scope.len=Object.keys($scope.shopInfo);
		$scope.goodsNum=[];
		$scope.goodsChose=[];
		shopIsEmpty();
//		判断购物车是否为空
		function shopIsEmpty(){
			$scope.len=Object.keys($scope.shopInfo);
		if($scope.len.length>=1){
			$scope.shopNO=false;
		$scope.shop=true;
		}else{
			$scope.shopNO=true;
		$scope.shop=false;
		}
		}
		
		for (var i = 0; i < $scope.len.length; i++) {
			$scope.goodsNum[i]=1;
			$scope.goodsChose[i]=false;
		}
		$scope.allChose=false;
		$scope.toPay=function(){
			if($scope.allChose==true){
				$state.go('pay');
			}else{
				alert('请选择商品');
			}
		}
//		删除商品
		$scope.deleteGoods=function (key) {
			var ooo=JSON.parse(localStorage.getItem('aaaa'));
			delete ooo[key];
			localStorage.setItem('aaaa',JSON.stringify(ooo));
			$scope.shopInfo=JSON.parse(localStorage.getItem('aaaa'));
			shopIsEmpty();
		}
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
						allPrice($scope.shopInfo);
						$scope.allGoodsState=true;
					}
				}
				else{
					$scope.allPrice=0;
					$scope.allChose=false;
					$scope.allGoodsState=false;
				}
			}
		}
//		全选/全不选
		$scope.choseAll=function () {
			allPrice($scope.shopInfo);
			$scope.allChose=!$scope.allChose;
			if($scope.allChose==true){
				state(true);
				$scope.allPrice=$scope.price;
				$scope.allGoodsState=true;
			}else{
				state(false);
				$scope.allPrice=0;
				$scope.allGoodsState=false;
			}
		}
//		增加数量
		$scope.add=function (n,key) {
			for (var i = 0; i < $scope.goodsNum.length; i++) {
				if(i==n){
					$scope.shopInfo[key].num++;
					localStorage.setItem('aaaa',JSON.stringify($scope.shopInfo));
				}
			}
			if($scope.allChose==true){
				allPrice($scope.shopInfo);
			}else{
				$scope.allPrice=0;
			}
		}
		//减少数量
		$scope.dec=function (n,key) {
			for (var i = 0; i < $scope.goodsNum.length; i++) {
				if(i==n){
					$scope.shopInfo[key].num--;
					if($scope.shopInfo[key].num<=1){
						$scope.shopInfo[key].num=1;
					}
					localStorage.setItem('aaaa',JSON.stringify($scope.shopInfo));
				}
			}
			if($scope.allChose==true){
				allPrice($scope.shopInfo);
			}else{
				$scope.allPrice=0;
			}
		}
//		所有商品价格的方法
		function allPrice(res){
			var a=0;
			var allCount=0;
			for(key in res){
			var count=res[key].num;
			var price=res[key].sales_price;
			a+=count*price;
			allCount+=count;
		}
			$scope.allPrice=a.toFixed(2);
			$scope.price=$scope.allPrice;
			$scope.allCount=allCount;
		}
		function state(res){
			for (var i = 0; i <$scope.goodsChose.length; i++) {
				$scope.goodsChose[i]=res;
			}
		}
	}])
})

