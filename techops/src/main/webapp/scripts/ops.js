require(['app',
    'controllers/common/dialogs/enable-disable',
    'controllers/user/user',
    'controllers/user/dialogs/add',
    'controllers/user/dialogs/reset-password',
    'controllers/user/dialogs/modify',
    'controllers/group/group',
    'services/common/logout-service',
    'services/common/common-service',
    'services/common/http-interceptor-service',
    'services/user/user-service',
    'services/group/group-service'],

    function(app) {
        var components = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, len = components.length; i < len; i++) {
            if (components[i].svc) {
                // Register Factory
                app.factory(components[i].name, components[i].svc);
            } else if (components[i].fn) {
                // Register Controllder
                app.controller(components[i].name, components[i].fn);
            } else if (components[i].directiveFn) {
                app.directive(components[i].name, components[i].directiveFn);
            } else if (components[i].filterFn) {
                app.filter(components[i].name, components[i].filterFn);
            }
        }
        app.bootstrap();
    }
);