/**
 * Created by mmedrano on 9/15/2016.
 */

var speedBump = angular.module('speedBump', []);

speedBump.factory('speedBump', function($window, $document, $compile, $templateRequest) {
    return function(config) {
        if (document.querySelector('.xt-speed-bump'))
            return false;

        var doc = $document.find('body');
        var docInitialOverFlow = doc.css('overflow');
        var tpl = '<div class = "xt-speed-bump">' +
            '<div class = "box">' +
                '<div class = "header"></div>' +
                '<div class = "body"></div>' +
                '<div class = "footer"></div>' +
            '</div>' +
        '</div>';

        var scope = config.scope;

        var width =  config.width || 400;

        var speed = angular.element(tpl);
        var box = angular.element(speed[0].querySelector('.box'));
        var body = angular.element(box[0].querySelector('.body'));
        var footer = angular.element(box[0].querySelector('.footer'));
        var header = angular.element(box[0].querySelector('.header'));
        
        var killSpeedBump = function () {
            speed.remove();
            doc.css('overflow', docInitialOverFlow);
        };

        var setHeader = function (html) {
            header.append(angular.element(html));
            angular.element(header[0].querySelector('.title')).html(config.title);
            angular.element(header[0].querySelector('.trigger')).html(config.trigger);
            angular.element(header[0].querySelector('.trigger')).on('click', killSpeedBump);
            scope && $compile(header)(scope);
            centralize();
        };
        
        var setBody = function (html) {
            body.append(angular.element(html));
            angular.element(body[0].querySelector('.icon')).html(config.icon);
            angular.element(body[0].querySelector('.content')).html(config.message);
            scope && $compile(body)(scope);
            centralize();
        };

        var centralize = function () {
            box.css({
                'margin-top': -box.prop('offsetHeight')/2 + 'px'
            });
        };

        speed.on('click', killSpeedBump);

        box.on('click', function (e) {
            e.stopPropagation();
        });

        /**
         * HEADER
         * */
        if (config.headerTemplateUrl)
            $templateRequest(config.headerTemplateUrl).then(setHeader);
        else if (config.headerTemplate)
            setHeader(config.headerTemplate);
        else
            setHeader('<div class = "title"></div><div class = "trigger"></div>');
        /**
         * BODY
         * */
        if (config.bodyTemplateUrl)
            $templateRequest(config.bodyTemplateUrl).then(setBody);
        else if (config.bodyTemplate)
            setBody(config.bodyTemplate);
        else
            setBody('<div class = "icon"></div><div class = "content"></div>');
        /**
         *  FOOTER
         *  */
        angular.forEach(config.buttons || [], function (ref) {
            var fn = (config.callbacks || {})[ref.key] || function () {};
            var btn = angular.element('<button>' + ref.text + '</button>');
            footer.append(btn);
            btn.on('click', function () {
                fn();
                killSpeedBump();
            });
        });

        box.css('width', width + 'px');
        doc.css('overflow', 'hidden');
        doc.append(speed);
        centralize();
    };
});