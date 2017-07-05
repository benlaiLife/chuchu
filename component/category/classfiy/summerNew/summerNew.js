define(['uiRouter'], function() {
	angular.module("summerNewModule", [])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("category.classfiy.summerNew", {
					url: "/summerNew/:num",
					templateUrl: "component/category/classfiy/summerNew/summerNew.html",
					controller: "summerNewCtrl",
					css: "component/category/classfiy/summerNew/summerNew.css"
				})
		})
	.service('getData', ['$http', function($http) {
			this.get = function(message) {
				return $http.get(message);

			}
		}])
		.controller("summerNewCtrl", ["$scope", 'getData','$state','$stateParams', function($scope, getData,$state,$stateParams) {
			$scope.back = function() {
				window.history.go(-1);
			}
			if($stateParams.num==0){
				getData.get('component/category/classfiy/summerNew/summerNewF.json').then(function(res) {
					$scope.arr = res.data.data;	
				})
			}else if($stateParams.num==1){
				getData.get('component/category/classfiy/summerNew/summerNewM.json').then(function(res) {
					$scope.arr = res.data.data;			
				})
			}
			$scope.goDetails = function(){
				$state.go('9yuan9',{flag: 0,jsonUrl: 'component/category/classfiy/summerNew/detail/detailF.json'});
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
		}])
})