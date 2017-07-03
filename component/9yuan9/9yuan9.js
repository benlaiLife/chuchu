define(['uiRouter'],function  () {
	angular.module("9yuan9Module",['ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("9yuan9",{
                url:"/9yuan9",
                templateUrl:"component/9yuan9/9yuan9.html",
                controller:"9yuan9Ctrl",
                css:["component/9yuan9/9yuan9.css","component/9yuan9/swiper.min.css"]
            })
    })
    .controller("9yuan9Ctrl",["$scope","$http","$timeout",function ($scope,$http,$timeout) {
        $http.get("component/9yuan9/json/json.json").then(function (res) {
            $scope.arr=res.data.data.groupList[1].dataList;
            $scope.isActive1=true;
            $scope.isActive=false;
            $scope.isShow=true;
            $scope.isShow1= false;
            $scope.show=function (x) {
                if(x==0){
                    $scope.isActive1=false;
                    $scope.isActive=true;
                    $http.get("component/9yuan9/json/json1.json").then(function (mes) {
                        $scope.arr=mes.data.data.groupList[1].dataList;
                    })
                }else if(x==1){
                    $scope.isActive1=true;
                    $scope.isActive=false;
                    $http.get("component/9yuan9/json/json.json").then(function (res) {
                        $scope.arr=res.data.data.groupList[1].dataList;
                    })
                }
            }
            $scope.change=function (num) {
                if(num==0){
                    shops("component/9yuan9/json/detail.json");
                }else if(num==1){
                    shops("component/9yuan9/json/shop1.json")
                }else if(num==2){
                    shops("component/9yuan9/json/shop2.json")
                }
            }
            function shops(json) {
                $http.get(json).then(function (ses) {
                    $scope.isShow= false;
                    $scope.isShow1= true;
                    $scope.arrt=ses.data.data.product.image_urls_head;
                    $scope.arrs=ses.data.data.coupon_tmpl.list;
                    $scope.arr1=ses.data.data.product;
                    $scope.now=ses.data.data.product.sales_price;
                    $scope.old=ses.data.data.product.salesPrice_backUp;
                    $scope.buy=ses.data.data.product.buy_num;
                    $scope.title=ses.data.data.product.productTitle;
                    $timeout(function(){
                        var mySwiper = new Swiper ('.swiper-container', {
                            loop: true,
                            autoplay:500,
                            // 如果需要分页器
                            pagination: '.swiper-pagination'
                        })
                    },50)
                })
            }
        })
    }])
})
