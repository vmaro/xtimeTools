/**
 * Created by mmedrano on 9/16/2016.
 */

app.service('xtSpeedBump', ['speedBump', function(speedBump) {
    return function (config) {
        config = config || {};
        config = angular.extend({
            'default': {
                title: 'Warning',
                buttons: [{
                    key: 'proceed',
                    text: 'Proceed'
                }, {
                    key: 'cancel',
                    text: 'Cancel'
                }],
                message: 'You have unsaved changes, are you sure you want to continue?'
            },
            'commonDelete': {
                buttons: [{
                    key: 'delete',
                    text: 'Delete'
                }, {
                    key: 'cancel',
                    text: 'Cancel'
                }],
                title: 'Warning',
                message: 'Are you sure you want to delete'
            }
        }[config.type || 'default'], config);
        
        speedBump(config);
    }
}]);
