// API routing

'use strict';
let mongodb = require('mongodb')
let mongoose = require('mongoose')
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

module.exports = function(app) {
// https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/TSLA/quote

  app.route('/api/stock-prices').get(function(req, res) {});
};
