(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('咩'))
        .then(() => engine.shake())
        .then(() => engine.toText('！'))
        .then(() => engine.shake())
        .then(() => engine.toText('生'))
        .then(() => engine.shake())
        .then(() => engine.toText('日'))
        .then(() => engine.shake())
        .then(() => engine.toText('快'))
        .then(() => engine.shake())
        .then(() => engine.toText('乐'))
        .then(() => engine.shake())
        .then(() => engine.toText('鸭'))
        .then(() => engine.shake())
        .then(() => engine.toText('！'))
        .then(() => engine.shake())
       
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
