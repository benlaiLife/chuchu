define(['uiRouter'],function  () {
	angular.module("9yuan9Module",['ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("9yuan9",{
                url:"/9yuan9",
                templateUrl:"component/9yuan9/9yuan9.html",
                controller:"9yuan9Ctrl",
                css:"component/9yuan9/9yuan9.css"
            })
    })
    .controller("9yuan9Ctrl",["$scope","$http",function ($scope,$http) {
        $http.get("component/9yuan9/json/json.json").then(function (res) {
            console.log(res);
            console.log(res.data.data.groupList[1].dataList);
            $scope.arr=res.data.data.groupList[1].dataList;
            $scope.isActive1=true;
            $scope.isActive=false;
            $scope.show=function (x) {
                if(x==0){
                    $scope.isActive1=!$scope.isActive1;
                    $scope.isActive=!$scope.isActive;
                    $http.get("component/9yuan9/json/json1.json").then(function (mes) {
                        $scope.arr=mes.data.data.groupList[1].dataList;
                    })
                }else{
                    $scope.isActive1=!$scope.isActive1;
                    $scope.isActive=!$scope.isActive;
                    $http.get("component/9yuan9/json/json.json").then(function (res) {
                        $scope.arr=res.data.data.groupList[1].dataList;
                    })
                }
            }
        })
    }])
})
