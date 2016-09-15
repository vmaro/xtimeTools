/**
 * Created by mmedrano on 9/15/2016.
 */

var speedBump = angular.module('speedBump', []);

speedBump.factory('speedBump', function($document) {
    return function(config) {
        var doc = $document.find('body');
        var parent = config.element || doc;
        var docInitialOverFlow = doc.css('overflow');
        var tpl = '<div class = "xt-speed-bump">' +
            '<div class = "box">' +
                '<div class = "header"></div>' +
                '<div class = "body"></div>' +
                '<div class = "footer"></div>' +
            '</div>' +
        '</div>';

        var width =  config.width || 400;
        var height =  config.height || 120;

        var speed = angular.element(tpl);
        var box = angular.element(speed[0].querySelector('.box'));
        var body = angular.element(speed[0].querySelector('.body'));
        var footer = angular.element(box[0].querySelector('.footer'));
        var header = angular.element(speed[0].querySelector('.header'));

        var killSpeedBump = function () {
            speed.remove();
            doc.css('overflow', docInitialOverFlow);
        };

        box.css({
            width: width + 'px',
            position: 'absolute',
            height: height + 'px',
            'margin-top': - height/2 + 'px',
            'margin-left':  - width/2 + 'px'
        });

        speed.on('click', function () { killSpeedBump(); });
        box.on('click', function (e) { e.stopPropagation(); });

        angular.forEach(config, function (fn, key) {
            var btn = angular.element('<button>' + key + '</button>');
            footer.append(btn);
            btn.on('click', function () {
                fn();
                killSpeedBump();
            });
        });

        doc.css('overflow', 'hidden');
        parent.append(speed);
    };
});