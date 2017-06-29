define(['uiRouter'],function  () {
	angular.module("categoryModule",['ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("category",{
                url:"/category",
                templateUrl:"component/category/category.html",
                controller:"categoryCtrl"
            })
    })
    .controller("categoryCtrl",["$scope",function ($scope) {
        $scope.title="分类"
    }])
})
