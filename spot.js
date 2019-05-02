(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('姑娘'))
        .then(() => engine.shake())
        .then(() => engine.toText('B'))
        .then(() => engine.shake())
        .then(() => engine.toText('C'))
        .then(() => engine.shake())
        .then(() => engine.toText('D'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
