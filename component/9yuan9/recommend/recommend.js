/**
 * Created by asus on 2017/6/30.
 */
define(['uiRouter'], function() {
    angular.module("recommendModule", ['ui.router',"9yuan9Module"])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("9yuan9.recommend", {
                    url: "/recommend",
                    templateUrl: "component/9yuan9/recommend/recommend.html",
                    controller: "recommendCtrl",
                    css: ["component/9yuan9/details/details.css","component/9yuan9/9yuan9.css","component/9yuan9/swiper.min.css"]
                })
        })
    .controller("recommendCtrl",["$scope","$http",function ($scope,$http) {
        $http.get("component/9yuan9/json/conment.json").then(function (mes) {
            console.log(mes);
        })
    }])
})