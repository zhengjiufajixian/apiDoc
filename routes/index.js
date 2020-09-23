var express = require('express');
var router = express.Router();
var path = require('path');

router.all('/', function (req, res) {
    res.sendFile('home.html', {
        root: path.join(__dirname + '/../views')
    });
});

router.all('/v3/client2b', function (req, res) {
    res.sendFile('client2b_api_v3.html', {
        root: path.join(__dirname + '/../views')
    });
});

router.all('/v3/client2c', function (req, res) {
    res.sendFile('client2c_api_v3.html', {
        root: path.join(__dirname + '/../views')
    });
});

router.all('/v3/mgmt', function (req, res) {
    res.sendFile('mgmt_api_v3.html', {
        root: path.join(__dirname + '/../views')
    });
});

router.all('/v4/client2b', function (req, res) {
    res.sendFile('client2b_api_v4.html', {
        root: path.join(__dirname + '/../views')
    });
});

router.all('/v4/client2c', function (req, res) {
    res.sendFile('client2c_api_v4.html', {
        root: path.join(__dirname + '/../views')
    });
});

router.all('/v4/mgmt', function (req, res) {
    res.sendFile('mgmt_api_v4.html', {
        root: path.join(__dirname + '/../views')
    });
});

module.exports = router;
