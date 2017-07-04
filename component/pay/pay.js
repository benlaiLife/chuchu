define(['uiRouter'], function() {
			angular.module("payModule", ['ui.router'])
				.config(function($stateProvider, $urlRouterProvider) {
					$stateProvider
						.state("pay", {
							url: "/pay",
							templateUrl: "component/pay/pay.html",
							controller: "payCtrl",
							css: 'component/pay/pay.css'
						})
				})
				.controller('payCtrl', ['$scope', '$http', function($scope, $http) {
						$scope.goodsInfo = JSON.parse(localStorage.getItem('aaaa'));
						var price = 0;
						for(key in $scope.goodsInfo) {
							$scope.goodsInfo[key].goodsPrice = ($scope.goodsInfo[key].num * $scope.goodsInfo[key].sales_price).toFixed(2);

							price += Number($scope.goodsInfo[key].goodsPrice);
						}
						$scope.all = price.toFixed(2);
						//城市数据
						$http.get('component/pay/json/chinaCities.json').then(function(res) {
							//省数据
							$scope.cities = res.data.china
						})
						//市数据
						$scope.citie = function(polis) {
							angular.forEach($scope.cities, function(data) {
								if(polis == data.name

								) {
									$scope.urban = data.sub;
									if(!$scope.urban[0].sub) {
										var arr = [{ name: 'a' }];
										arr.push({ name: polis })
										$scope.urban = arr;
									}
								}
							})
						}
						//区数据
						$scope.town = function(tow) {
							if(!$scope.urban[0].sub) {
								angular.forEach($scope.cities, function(data) {
									if(tow == data.name	) {
										$scope.region = data.sub
									}
								})
							} else {
								angular.forEach($scope.urban, function(data) {
									//console.log(data)
									if(tow == data.name) {
										$scope.region = data.sub;
									}
								})
							}
						}
						}])
				})