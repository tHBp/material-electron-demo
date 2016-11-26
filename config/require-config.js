var RESOURCE_BASE_PATH = '../components/';
require.config({
    // baseUrl: RESOURCE_BASE_PATH,
    waitSeconds: 300,
    paths: {
        'jquery': '../libs/jquery/jquery-2.1.3.min',
        'knockout': '../libs/knockout/knockout-3.4.0',
        'knockout-helper': '../libs/knockout/knockout-amd-helpers.min',
        'knockout-mapping': '../libs/knockout/knockout.mapping-latest',
        'text': '../libs/require/text.min',
        'css': '../libs/require-css/css.min'
        },
    shim: {
        'jquery': {
            'exports': 'jquery'
        },
        'knockout': {
            'exports': 'knockout',
            'deps': ['jquery']
        }
    },
    config: {
        text: {
            useXhr: function(url, protocol, hostname, port) {
                return true;
            }
        }
    }
});