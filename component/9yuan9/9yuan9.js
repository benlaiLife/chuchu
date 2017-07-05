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
            $scope.isShow2=false;
            $scope.backHead=function () {
                window.history.go(-1);
            }
            $scope.back=function () {
                $scope.isShow2=false;
            }
            $scope.add=function () {
                $scope.numm++;
            }
            $scope.col=function (coco) {
                $scope.color=coco;
            }
            $scope.recd=function () {
                $scope.numm--;
            }
            $scope.commit=function (a,a1,b,c,d,e) {
                $scope.isShow2=false;
                if(!window.localStorage){
                    alert("浏览器支持localstorage");
                    return false;
                }else{
                    var obj2 = JSON.parse(localStorage.getItem('aaaa'));
                    //如果之前错过东西,那么这个obj就不为空,就直接往obj里面添加新的键值对
                    if(obj2){
                        //如果当前要存的值已经存过了,只需要加数量就行
                        if(obj2[a.product_id]){
                            obj2[a.product_id].num=b;
                            obj2[a.product_id].title=c;
                            obj2[a.product_id].img=a1;
                            obj2[a.product_id].price=d;
                            obj2[a.product_id].color=e;

                        }else{
                            a.num = 1;
                            obj2[a.product_id] = a;
                            obj2[a.product_id].num=b;
                            obj2[a.product_id].title=c;
                            obj2[a.product_id].img=a1;
                            obj2[a.product_id].price=d;
                            obj2[a.product_id].color=e;
                        }
                    }else{
                        //如果obj是空的,就证明这是第一次存值,就要新建一个obj
                        obj2 = {};
                        a.num = 1;
                        obj2[a.product_id] = a;
                    }
                    console.log(obj2);
                    localStorage.setItem('aaaa',JSON.stringify(obj2));
                }
            }
            $scope.addShopCar=function (a) {
                $scope.isShow2=true;
                $scope.numm=1;

            }
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
