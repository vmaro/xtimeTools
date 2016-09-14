/**
 * Created by mmedrano on 9/14/2016.
 */

app.controller('AdminCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.sections = [{
        name: 'Promotion Details',
        routeTo: 'admin.promotionDetails'
    }, {
        name: 'Audience Member Details',
        routeTo: 'admin.audienceMemberDetails'
    }];
    $scope.test = 'Admin Scope test';
}]);