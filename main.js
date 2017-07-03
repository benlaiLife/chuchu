require.config({
	paths: {
		'app': 'js/app',
		'angular': 'js/libs/angular-1.4.6.min',
		'uiRouter': 'js/libs/angular-ui-router-0.4.2.min',
		'swiper': 'js/libs/swiper.min',
		'9yuan9': 'component/9yuan9/9yuan9',
		'home': 'component/home/home',
		'mine': 'component/mine/mine',
		'category': 'component/category/category',
		'search': 'component/search/search',
		'shopCar':'component/shopCar/shopCar',
		'css':'js/libs/angular-css.min',
		'lazyLoad':'js/libs/me-lazyload',
        "details":"component/9yuan9/details/details",
        "evaluate":"component/9yuan9/evaluate/evaluate",
        "recommend":"component/9yuan9/recommend/recommend"
	},
	shim: {
		'uiRouter': {
			deps: ['angular']
		},
		'lazyLoad':['angular'],
        'css': {
            deps: ['angular']
        },
		'home':['uiRouter'],
		'search':['uiRouter'],
		'shopCar':['uiRouter'],
		'mine':['uiRouter'],
		'category':['uiRouter'],
        "details":['uiRouter'],
        "evaluate":['uiRouter'],
        "recommend":['uiRouter'],
		'9yuan9': {
			deps: ['uiRouter']
},
		'app': {
			deps: ['uiRouter']
		}
	}

});

require(['app'],function(){
		angular.bootstrap(document, ['myModule']);
})
