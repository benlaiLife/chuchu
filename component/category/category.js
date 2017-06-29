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
                controller:"categoryCtrl",
                css:"component/category/category.css"
            })
    })
    .service('getData',['$http',function($http){
    		this.get = function(){
			return $http.get('component/category/category_woman.json');
		}
    }]) 
    .controller("categoryCtrl",["$scope",'getData',function ($scope,getData) {
    	  getData.get().then(function(res){
    	  	console.log(res);
        	$scope.arr = res.data.data;
        }) 
    }])
})
