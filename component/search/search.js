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

			$scope.back = function() {
				window.history.go(-1);
			}
			var name = '美';
			if(chkstrlen(name)) {
				name = toUnicode(name);
			}
			var str = 'https://api.chuchujie.com/api/?client={"ageGroup":"QD_web_webkit","channel":"QD_web_webkit","deviceId":"0","gender":"1","imei":"0","packageName":"com.culiu.purchase","platform":"wap","sessionId":"0","shopToken":"0","userId":"0","version":"1.0","xingeToken":""}&query={"module":"search","function":"keyword","q":"美丽","page":"1"}'
//			var url = "https://api.chuchujie.com/api/?client={%22ageGroup%22:%22QD_web_webkit%22,%22channel%22:%22QD_web_webkit%22,%22deviceId%22:%220%22,%22gender%22:%221%22,%22imei%22:%220%22,%22packageName%22:%22com.culiu.purchase%22,%22platform%22:%22wap%22,%22sessionId%22:%220%22,%22shopToken%22:%220%22,%22userId%22:%220%22,%22version%22:%221.0%22,%22xingeToken%22:%22%22}&query={%22module%22:%22search%22,%22function%22:%22keyword%22,%22q%22:%22" + name + "%22,%22page%22:%221%22}&sort=favcount_desc"
			$http.get(str).then(function  (res) {
				console.log(res.data);
				$scope.obj = res.data.data.productList;
			})
		}])
})

//将汉字转化成16进制
function toUnicode(str) {　　　　 var val = "";　　　　 for(var i = 0; i < str.length; i++) {　　　　　　 if(val == "")　　　　　　　　 val = str.charCodeAt(i).toString(16);　　　　　　
		else　　　　　　　　 val += "," + str.charCodeAt(i).toString(16);　　　　 }　　　　 return val;　　 }
//判断是不是汉字
function chkstrlen(str)　　 {　　　　 var strlen = 0;　　　　 for(var i = 0; i < str.length; i++)　　　　 {　　　　　　 if(str.charCodeAt(i) > 255) //如果是汉字，则字符串长度加2
			　　　　　　　　 return true;　　　　　　
		else　　　　　　　　 return false;　　　　 }　　 }