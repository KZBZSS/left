(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('A'))
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
