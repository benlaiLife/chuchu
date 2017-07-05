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
<<<<<<< HEAD
		'classfiy':'component/category/classfiy/classfiy',
		'summerNew':'component/category/classfiy/summerNew/summerNew',
		'search': 'component/search/search',
		'shopCar':'component/shopCar/shopCar',
=======

		'search': 'component/search/search',

>>>>>>> zhujianghong
		'css':'js/libs/angular-css.min',
		'lazyLoad':'js/libs/me-lazyload',
        "details":"component/9yuan9/details/details",
        "evaluate":"component/9yuan9/evaluate/evaluate",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 12d24948fa534bb5cc296fe48b8081d82d8ff0c3
        "recommend":"component/9yuan9/recommend/recommend",
        "collection":"component/mine/collection/collection",
        "pay":"component/pay/pay",
        "recommend":"component/9yuan9/recommend/recommend"
<<<<<<< HEAD
>>>>>>> 2ee015f22ac5a914d86ae2c7d56496626b757be6
=======

        "recommend":"component/9yuan9/recommend/recommend",
        "collection":"component/mine/collection/collection"

>>>>>>> zhujianghong
=======
>>>>>>> 12d24948fa534bb5cc296fe48b8081d82d8ff0c3
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
<<<<<<< HEAD
		'shopCar':['uiRouter'],
=======

>>>>>>> zhujianghong
		'mine':['uiRouter'],
		'category':['uiRouter'],
        "details":['uiRouter'],
        "evaluate":['uiRouter'],
        "recommend":['uiRouter'],
<<<<<<< HEAD
        "classfiy":['uiRouter'],
        "summerNew":['uiRouter'],
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 12d24948fa534bb5cc296fe48b8081d82d8ff0c3
>>>>>>> 56d5953fd6acc045ea9026d8d70406c650b8a02f
        'collection':['uiRouter'],
        "pay":['uiRouter'],
<<<<<<< HEAD
        "classfiy":['uiRouter'],      
>>>>>>> 2ee015f22ac5a914d86ae2c7d56496626b757be6
=======

        'collection':['uiRouter'],

>>>>>>> zhujianghong
=======
        "classfiy":['uiRouter'],
>>>>>>> 12d24948fa534bb5cc296fe48b8081d82d8ff0c3
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
