require.config({
    baseUrl: '../',
    shim: {
        'underscore': {
            exports: '_'
        },
        'underscore-string': {
            deps: [
                'underscore'
            ],
            exports: '_.str'
        },
        'handlebars-orig': {
            exports: 'Handlebars'
        },
        'backbone': {
            deps: [
                'underscore',
                'underscore-string',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'moment-fr': {
            deps: [
                'moment'
            ]
        }
    },

    // Libraries
    paths: {
        jquery:                     'bower_components/jquery/jquery.min',
        underscore:                 'bower_components/underscore/underscore-min',
        backbone:                   'bower_components/backbone/backbone-min',
        'underscore-string':        'bower_components/underscore.string/dist/underscore.string.min',
        i18n:                       'bower_components/requirejs-i18n/i18n',
        text:                       'bower_components/requirejs-text/text',
        moment:                     'bower_components/momentjs/min/moment.min',
        'moment-fr':                'bower_components/momentjs/lang/fr',
        console:                    'src/console',
        resthub:                    'src/resthub',
        'jquery-event-destroyed':   'src/jquery-event-destroyed',
        hbs:                        'src/require-handlebars',
        'handlebars':               'src/handlebars-helpers',
        'handlebars-orig':          'bower_components/handlebars.js/dist/handlebars',
        'backbone-validation-orig': 'src/libs/backbone-validation',
        'backbone-validation':      'src/backbone-validation-ext'
    }
});

QUnit.config.autostart = false;

require(['console', 'tests/handlebars-helpers', /*'tests/inclusions',*/
    'tests/require-handlebars', 'tests/backbone-remove',
    'tests/backbone-view',
    'tests/backbone-populate-model', 'tests/console',
    'tests/backbone-i18n', 'tests/backbone-validation'], function() {
    QUnit.start();
});
