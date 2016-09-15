/**
 * Created by mmedrano on 9/14/2016.
 */

app.controller('AdminCtrl', ['$scope', '$http', 'speedBump', function($scope, $http, speedBump) {    
    $scope.promotionDetails = {
        promotionCode: ''
    };
    $scope.audienceMemberDetails = {
        vin: '',
        externalId: '',
        promotionCode: ''
    };
    $scope.audience = {
        promotionCode: ''
    };
    $scope.promotionStatus = {
        promotionCode: '',
        status: 'activate'
    };
    $scope.deletePromotion = {
        promotionCode: ''
    };

    $scope.sections = [{
        name: 'Promotion Details',
        routeTo: 'admin.promotionDetails'
    }, {
        name: 'Audience Member Details',
        routeTo: 'admin.audienceMemberDetails'
    }, {
        name: 'Audience',
        routeTo: 'admin.audience'
    }, {
        name: 'Promotion Status',
        routeTo: 'admin.promotionStatus'
    }, {
        name: 'Delete Promotion',
        routeTo: 'admin.deletePromotion'
    }];

    $scope.getPromotionMemberDetails = function () {
        speedBump({
            ok: function () {
                console.log($scope.promotionDetails.promotionCode);
            },
            cancel: function () {}
        });
        $http.get('/xmark/rest/admin' +
            '/promotion/' + $scope.promotionDetails.promotionCode);
    };
    $scope.getAudienceMemberDetails = function () {
        $http.get('/xmark/rest/admin' +
            '/promotion/' + $scope.promotionDetails.promotionCode +
            '/audience/' + $scope.promotionDetails.externalId +
            '/' + $scope.promotionDetails.vin
        );
    };
    $scope.updateDownloadUrl = function () {
        $scope.downloadUrl = '/xmark/rest/admin' +
            '/promotion/' + $scope.audience.promotionCode +
        '/audience';
    };
    $scope.updateStatus = function () {
        $http.post(
            '/xmark/rest/program/updateStatusForPromotions/' + $scope.promotionStatus.status,
            $scope.promotionStatus.promotionCode
        );
    };
    $scope.deletePromotion = function () {
        $http({
            method: 'delete',
            url: '/xmark/rest/admin/promotion/' + $scope.deletePromotion.promotionCode
        });
    };
}]);