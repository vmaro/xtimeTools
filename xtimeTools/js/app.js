/**
 * Created by mmedrano on 9/14/2016.
 */

var app = angular.module('xtimeTools', [
	'ui.router',
	'ui.bootstrap',
	'speedBump'
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
			.state('admin.audience', {
				url: '/audience',
				templateUrl: 'xtimeTools/view/admin/audience.html'
			})
			.state('admin.promotionStatus', {
				url: '/promotionStatus',
				templateUrl: 'xtimeTools/view/admin/promotionStatus.html'
			})
			.state('admin.deletePromotion', {
				url: '/deletePromotion',
				templateUrl: 'xtimeTools/view/admin/deletePromotion.html'				
			})
		
		.state('promoStatus', {
			url: '/promoStatus',
			controller: 'PromoStatusCtrl',
			templateUrl: 'xtimeTools/view/promoStatus.html'
		});
});
/*app.run(function ($rootScope, $state, xtSpeedBump) {
	$rootScope.isDirty = false;
	$rootScope.$on('$stateChangeStart', function(e, toState) {
		if ($rootScope.isDirty) {
			e.preventDefault();
			xtSpeedBump({
				callbacks: {
					proceed: function () {
						$rootScope.isDirty = false;
						$state.go(toState.name);
					}
				}
			});
		}
	});
});*/