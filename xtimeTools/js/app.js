/**
 * Created by mmedrano on 9/14/2016.
 */

var app = angular.module('xtimeTools', [
	'ui.router',
	'ui.bootstrap'
]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/admin');

	$stateProvider
		.state('admin', {
			url: '/admin',
			controller: 'AdminCtrl',
			templateUrl: 'xtimeTools/view/Admin.html'
		})
		.state('promoStatus', {
			url: '/promoStatus',
			controller: 'PromoStatusCtrl',
			templateUrl: 'xtimeTools/view/PromoStatus.html'
		});
});