/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter'],function  () {
	angular.module("mineModule",[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("mine",{
                url:"/mine",
                templateUrl:"component/mine/mine.html",
                controller:"mineCtrl",
                css:"component/mine/mine.css"
            })
    })
    .controller("mineCtrl",["$scope",function ($scope) {
        $scope.title="我的未来";
        $scope.change = false;
        $scope.newAccount = function(){
        	$scope.change = !$scope.change;
        }
    }])
})






























































































