/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter'],function  () {
	angular.module("categoryModule",[])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("category",{
                url:"/category",
                templateUrl:"component/category/category.html",
                controller:"categoryCtrl"
            })
    })
    .controller("categoryCtrl",["$scope",function ($scope) {
    }])
})
