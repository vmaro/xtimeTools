/**
 * Created by mmedrano on 9/14/2016.
 */

app.directive("sideBar", function ($state) {
    return {
        scope: {
            list: '='
        },
        restrict: "EA",
        replace: true,
        template: '<div class = "xt-side-bar" ng-show = "list">' +
            '<div' +
                ' class = "item"' +
                ' ng-repeat = "item in list"' +
                ' ng-click = "select(item);"' +
                ' ng-class = "{ selected : selected === item }"' +
            '>' +
                '<span>' +
                    '{{ item.name }}' +
                '</span>' +
            '</div>' +
        '</div>',
        link: function (scope) {
            scope.select = function (item) {
                scope.selected = item;
                $state.go(item.routeTo);
            };

            if (scope.list) {
                scope.selected = scope.list[0];
                scope.select(scope.selected);
            }

        }
    };
});