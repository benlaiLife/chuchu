define(['uiRouter'], function() {
	angular.module("searchModule", ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("search", {
					url: "/search",
					templateUrl: "component/search/search.html",
					controller: "searchCtrl",
					css: 'component/search/search.css'
				})
		})

		.controller("searchCtrl", ["$scope", '$http', function($scope, $http) {
			$scope.orderStyle='';
			$scope.keyword=true;
			$scope.searchRes=false;
			$scope.name='';
			$scope.itemSearch=function  (item) {
				$scope.searchVal=item;
				$scope.keyword=false;
				$scope.searchRes=true;
				$scope.name=item;
				var url = "https://api.chuchujie.com/api/?client={%22ageGroup%22:%22QD_web_webkit%22,%22channel%22:%22QD_web_webkit%22,%22deviceId%22:%220%22,%22gender%22:%221%22,%22imei%22:%220%22,%22packageName%22:%22com.culiu.purchase%22,%22platform%22:%22wap%22,%22sessionId%22:%220%22,%22shopToken%22:%220%22,%22userId%22:%220%22,%22version%22:%221.0%22,%22xingeToken%22:%22%22}&query={%22module%22:%22search%22,%22function%22:%22keyword%22,%22q%22:%22" + $scope.name + "%22,%22page%22:%221%22}&sort=favcount_desc"
				$http.get(url).then(function  (res) {
				$scope.obj = res.data.data.productList;
			})
			}
			$scope.back = function() {
				window.history.go(-1);
			}
			$scope.search=function () {
				$scope.itemSearch($scope.sear);
			}
			$scope.state=[true,false,false,false];
			$scope.sortGoods=function (index) {
				for (var i = 0; i < $scope.state.length; i++) {
					if(i==index){
						$scope.state[i]=true;
					}
					else{
						$scope.state[i]=false;
					}
				}
			}
			if(chkstrlen($scope.name)) {
				$scope.name = toUnicode($scope.name);
			}
//			搜索关键字
			$http.get('component/search/json/searchKey.json').then(function  (res) {
				$scope.searctItems=res.data.data.bannerGroupList["0"].bannerList;
			})
			
		}])
	
})

//将汉字转化成16进制
function toUnicode(str) {　　　　
	var val = "";　　　　
	for(var i = 0; i < str.length; i++) {　　　
		if(val == ""){
			val = str.charCodeAt(i).toString(16);　
		}　　　
		else{
			val += "," + str.charCodeAt(i).toString(16);　
		}
			 　　　
	}　　　　
	return val;　　
}
//判断是不是汉字
function chkstrlen(str)　　 {　　　　
	var strlen = 0;　　　　
	for(var i = 0; i < str.length; i++)　　　　 {　　　　　　
		if(str.charCodeAt(i) > 255) //如果是汉字，则字符串长度加2
			　　　　　　　　 return true;　　　　　　
		else　　　　　　　　 return false;　　　　
	}　　
}