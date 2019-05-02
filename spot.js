(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('欣'))
        .then(() => engine.shake())
        .then(() => engine.toText('欣'))
        .then(() => engine.shake())
        .then(() => engine.toText('姑'))
        .then(() => engine.shake())
        .then(() => engine.toText('娘'))
        .then(() => engine.shake())
        .then(() => engine.toText('是'))
        .then(() => engine.shake())
        .then(() => engine.toText('这'))
        .then(() => engine.shake())
        .then(() => engine.toText('句'))
        .then(() => engine.shake())
        .then(() => engine.toText('吗'))
        .then(() => engine.shake())
        .then(() => engine.toText('？'))
        .then(() => engine.shake())
        .then(() => engine.toText('不乱于心'))
        .then(() => engine.shake())
        .then(() => engine.toText('不困于情'))
        .then(() => engine.shake())
        .then(() => engine.toText('不为将来'))
        .then(() => engine.shake())
        .then(() => engine.toText('不念过往'))
        .then(() => engine.shake())
        .then(() => engine.toText('随遇而安'))
        .then(() => engine.shake())
        .then(() => engine.toText('顺其自然'))
        .then(() => engine.shake())
        .then(() => engine.toText('！'))
        .then(() => engine.shake())
        .then(() => engine.toText('！！'))
        .then(() => engine.shake())
        .then(() => engine.toText('！！！'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
