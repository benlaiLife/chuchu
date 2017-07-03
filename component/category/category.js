/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter'], function() {
	angular.module("categoryModule", [])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("category", {
					url: "/category",
					templateUrl: "component/category/category.html",
					controller: "categoryCtrl",
					css: "component/category/category.css"
				})
				
		})
		.service('getData', ['$http', function($http) {
			this.get = function(message) {
				return $http.get(message);

			}
		}])
		.controller("categoryCtrl", ["$scope", 'getData','$state', function($scope, getData,$state) {
			getData.get('component/category/category_woman.json').then(function(res) {
				$scope.arr = res.data.data;	
				$scope.isActiveWoman = true;
				$scope.isActiveMan = false;						
				$scope.show = function(x) {
					if(x == 0) {
						$scope.isActiveWoman = true;
						$scope.isActiveMan = false;
						getData.get('component/category/category_woman.json').then(function(res) {
							$scope.arr = res.data.data;
							$scope.getSex = function () {
	       			 			$state.go('category.classfiy',{num: 0});
	    					};		
						})
					}else if(x==1){
						$scope.isActiveWoman = false;
						$scope.isActiveMan = true;
						getData.get('component/category/category_man.json').then(function(res) {
							$scope.arr = res.data.data;
							$scope.getSex = function () {
	       			 			$state.go('category.classfiy',{num: 1});
	    					};		
						})					
					}
				}	
				$scope.isActive1 = true;
				$scope.isActive2 = false;
				$scope.isActive3 = false;
				$scope.isActive4 = false;	
				$scope.sort = function(num) {	
					if(num == 0) {						
						$scope.isActive1 = true;
						$scope.isActive2 = false;
						$scope.isActive3 = false;
						$scope.isActive4 = false;
						$scope.xyz='sort';
						
					} else if(num == 1) {	
						console.log(num);
						$scope.isActive2 = true;
						$scope.isActive1 = false;
						$scope.isActive3 = false;
						$scope.isActive4 = false;
						$scope.xyz='-saleCount';
						
					} else if(num == 2) {					
						$scope.isActive3 = true;
						$scope.isActive2 = false;
						$scope.isActive1 = false;
						$scope.isActive4 = false;
						$scope.xyz='-chuchuShopId';
					} else if(num == 3) {					
						$scope.isActive4 = true;
						$scope.isActive2 = false;
						$scope.isActive3 = false;
						$scope.isActive1 = false;
						$scope.xyz='newPrice';
					}
				};				
			})
		}])
})