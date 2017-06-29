define(['uiRouter'],function  () {
	angular.module("9yuan9Module",['ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("9yuan9",{
                url:"/9yuan9",
                templateUrl:"component/9yuan9/9yuan9.html",
                controller:"9yuan9Ctrl"
            })
    })
    .controller("9yuan9Ctrl",["$scope",function ($scope) {
        $scope.title="分类"
    }])
})
