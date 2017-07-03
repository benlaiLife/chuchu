/**
 * Created by asus on 2017/6/30.
 */
define(['uiRouter'], function() {
    angular.module("evaluateModule", ['ui.router',"9yuan9Module"])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("9yuan9.evaluate", {
                    url: "/evaluate",
                    templateUrl: "component/9yuan9/evaluate/evaluate.html",
                    controller: "devaluateCtrl",
                    css: ["component/9yuan9/evaluate/evaluate.css","component/9yuan9/details/details.css","component/9yuan9/9yuan9.css","component/9yuan9/swiper.min.css"]
                })
        })
        .controller("devaluateCtrl",["$scope","$http",function ($scope,$http) {
            $http.get("component/9yuan9/json/conment.json").then(function (mes) {
                $scope.conment=mes.data.data.list;
                console.log(mes.data.data.list)
                $scope.chang=function (x) {
                    if(x==2){
                        for (var i = 0; i <  $scope.conment.length; i++) {
                            if($scope.conment[i].has_img==0){
                                $scope.conment.splice(i,1);
                            }
                        }
                    }else if(x==3){
                        for (var i = 0; i <  $scope.conment.length; i++) {
                            if($scope.conment[i].score<=400){
                                $scope.conment.splice(i,1);
                            }
                        }
                    }else if(x==4){
                        for (var i = 0; i <  $scope.conment.length; i++) {
                            if($scope.conment[i].score>400 &&$scope.conment[i].score<=350){
                                $scope.conment.splice(i,1);
                            }
                        }
                    }else if(x==5){
                        for (var i = 0; i <  $scope.conment.length; i++) {
                            if($scope.conment[i].score>350){
                                $scope.conment.splice(i,1);
                            }
                        }
                    }
                }
            })
        }])
    })

