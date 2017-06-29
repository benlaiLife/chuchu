/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter'],function  () {
	angular.module("shopcarModule",[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("shopcar",{
                url:"/shopcar",
                templateUrl:"component/shopcar/shopcar.html",
                controller:"shopcarCtrl"
            })
    })
    .controller("shopcarCtrl",["$scope",function ($scope) {
        $scope.title="购物车"
    }])
})
