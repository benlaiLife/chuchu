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
                controller:"mineCtrl",
                css:"component/mine/mine.css"
            })
    })
<<<<<<< HEAD
    .controller("mineCtrl",["$scope","$state","$state",function ($scope,$state,$state) {
=======
    .controller("mineCtrl",["$scope","$state",function ($scope,$state) {
>>>>>>> zhujianghong
        $scope.change = false;
        $scope.changer = false;
        $scope.newAccount = function(){
        	$scope.changer = !$scope.changer;
        	$scope.change = !$scope.change;
        }
        $scope.myInput1="";
        $scope.myInput2="";
        $scope.myBtn = function(){
<<<<<<< HEAD
=======
        
>>>>>>> zhujianghong
        	if($scope.myInput1=='1' && $scope.myInput2=='1'){
        		$state.go("mine.collection");
        		$scope.change = true;
        		$scope.changer = false;
<<<<<<< HEAD
        	}else{

=======
>>>>>>> zhujianghong
        	}
       	}
    }])
})






























































































