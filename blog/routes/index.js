var express = require('express');
var router = express.Router();

var dishes = {
    manti: 'mmm leziz',
    corba: 'cok sulu olmus',
    pilav: 'yabis yabis',
    doner: 'cok sert olmus dik yapin bunu'
};

/* GET home page. */
router.get('/yemek/:type', function(req, res, next) {
    var dishMessage = dishes[req.params.type] || 'bu ne be';

    var params = {
        title: 'Express',
        message: dishMessage
    };

    res.render('index', params);
});

router.get('/yemek/:type/:message', function(req, res, next) {
    dishes[req.params.type] = req.params.message;

    var params = {
        title: 'Express',
        message: 'ok'
    };

    res.render('index', params);
});

router.get('/yemekler', function(req, res) {
    var dishesArray = [];

    for (var key in dishes) {
        dishesArray.push(key + ', ' + dishes[key])
    }

    res.render('index', {
        title: 'yemekler',
        message: dishesArray.join(', ')
    });
});

module.exports = router;
