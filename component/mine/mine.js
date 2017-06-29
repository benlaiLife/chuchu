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
                controller:"mineCtrl"
            })
    })
    .controller("mineCtrl",["$scope",function ($scope) {
        $scope.title="我的未来"
    }])
})
