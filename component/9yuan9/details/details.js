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
                    // controller: "detailsCtrl",
                    css: "component/9yuan9/details/details.css"
                })
        })
})