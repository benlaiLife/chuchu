define(['uiRouter'], function() {
	angular.module("classfiyModule", [])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("category.classfiy", {
					url: "/classfiy/:num",
					templateUrl: "component/category/classfiy/classfiy.html",
					controller: "classfiyCtrl",
					css: ["component/category/classfiy/classfiy.css","component/category/category.css"]
				})
		})
	.service('getData', ['$http', function($http) {
			this.get = function(message) {
				return $http.get(message);

			}
		}])
		.controller("classfiyCtrl", ["$scope", 'getData','$stateParams', function($scope, getData,$stateParams) {
			$scope.back = function() {
				window.history.go(-1);
			}
			if($stateParams.num==0){
				getData.get('component/category/classfiy/classfiyF.json').then(function(res) {
					console.log($stateParams.num);
					console.log(res.data.data);
					$scope.arr = res.data.data;			
				})
			}else if($stateParams.num==1){		
				getData.get('component/category/classfiy/classfiyM.json').then(function(res) {
					$scope.arr = res.data.data;	
				})
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