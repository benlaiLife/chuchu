/**
 * Created by asus on 2017/6/29.
 */
define(['uiRouter'],function  () {
    angular.module("homeModule",['ui.router'])
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

            getData.get('component/home/json/home.json').then(function (res) {
//                 console.log(res.data.data);
                $scope.homeGoods=res.data.data.groupList[2].dataList;
            })
            getData.get('component/home/json/home2.json').then(function (res2) {
//                 console.log(res2);
                $scope.homeGoods2=res2.data.data.groupList["0"].dataList;
            })
        }])

})
