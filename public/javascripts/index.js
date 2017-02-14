'use strict';
(function() {
    var app = ng.core
    .Component({
        selector: 'hello-component'
    })
    .View({
        template: '<p>Hello, {{name}} !</p>'
    })
    .Class({
        constructor: function() {
            this.name = 'world';
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app);
    });
})();