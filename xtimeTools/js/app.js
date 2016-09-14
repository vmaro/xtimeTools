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
			templateUrl: 'xtimeTools/view/admin/admin.html'
		})
		.state('admin.promotionDetails', {
			url: '/promotionDetails',
			templateUrl: 'xtimeTools/view/admin/promotionDetails.html'
		})
		.state('admin.audienceMemberDetails', {
			url: '/audienceMemberDetails',
			templateUrl: 'xtimeTools/view/admin/audienceMemberDetails.html'
		})
		
		.state('promoStatus', {
			url: '/promoStatus',
			controller: 'PromoStatusCtrl',
			templateUrl: 'xtimeTools/view/promoStatus.html'
		});
});