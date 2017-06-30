/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter','lazyLoad'],function  () {
    angular.module("homeModule",['ui.router','me-lazyload'])
        .config(function ($stateProvider,$urlRouterProvider) {
            $stateProvider
                .state("home",{
                    url:"/home",
                    templateUrl:"component/home/home.html",
                    controller:"homeCtrl",
                    css:'component/home/home.css'
                })
        })
        .service('getHomeData',['$http',function ($http) {
            this.get=function (data) {
                return $http.get(data);
            }
        }])
        .controller("homeCtrl",["$scope",'$http','getHomeData',function ($scope,$http,getData) {
        	$scope.man=false;
        	$scope.woman=true;
        	getData.get('component/home/json/home.json').then(function (res) {
                	$scope.homeGoods=res.data.data.groupList[2].dataList;
            	})
			$scope.home=function  (num) {
				if(num==1){
					 getData.get('component/home/json/home_man.json').then(function (res) {
                	$scope.homeGoods=res.data.data.groupList[2].dataList;
                	if($scope.man==false){
                		$scope.man=true;
                		$scope.woman=false;
                	}
            })
				}else if(num==0){
					 getData.get('component/home/json/home.json').then(function (res) {
                	$scope.homeGoods=res.data.data.groupList[2].dataList;
                	if($scope.woman==false){
                		$scope.man=false;
                		$scope.woman=true;
                	}
            	})
				}
			}
           
            getData.get('component/home/json/home2.json').then(function (res2) {
//                 console.log(res2);
                $scope.homeGoods2=res2.data.data.groupList["0"].dataList;
            })
        }])

})
