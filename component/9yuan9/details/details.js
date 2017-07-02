/**
 * Created by asus on 2017/6/30.
 */
define(['uiRouter'], function() {
    angular.module("detailsModule", ['ui.router',"9yuan9Module"])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("9yuan9.details", {
                    url: "/details",
                    templateUrl: "component/9yuan9/details/details.html",
                    controller: "detailsCtrl",
                    css: ["component/9yuan9/details/details.css","component/9yuan9/9yuan9.css","component/9yuan9/swiper.min.css"]
                })
        })
        .controller("detailsCtrl",["$scope","$http",function ($scope,$http) {
            $http.get("component/9yuan9/json/detail.json").then(function (mes) {
                console.log(mes.data.data.product.productSummaryInfo.infoList);
                $scope.product=mes.data.data.product.productSummaryInfo.infoList;
                $scope.shows=mes.data.data.product.simple_edit_info.image_text_array;
                $scope.likes=mes.data.data.relevance_list;
            })
        }])
})