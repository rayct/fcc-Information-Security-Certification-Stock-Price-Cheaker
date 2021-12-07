// API routing

'use strict';
let mongodb = require('mongodb')
let mongoose = require('mongoose')
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

module.exports = function(app) {

  // 1. Database Connection
  let uri = 'mongodb+srv://rayct:' + process.env.PWD + '@cluster0.kpipn.mongodb.net/stock_price_checker?retryWrites=true&w=majority'

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // 2. Creating the Model and Schema
  let stockSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    ips: [String]
  })
  let Stock = mongoose.model('Stock', stockSchema)


  app.route('/api/stock-prices')
    .get(function(req, res) {

      let responseObject = {}
      responseObject['stockData'] = {}

      // Variable to determine number of stocks
      let twoStocks = false

      /* Output Response */
      let outputResponse = () => {
        return res.json(responseObject)
      }

      /* Process Input */
      if (typeof (req.query.stock) === 'string') {
        /* One Stock */
        let stockName = req.query.stock

        let documentUpdate = {}
        findOrUpdateStock(stockName, documentUpdate, getPrice)

      }

      /* Find/Update Stock Document */
      let findOrUpdateStock = (stockName, documentUpdate, nextStep) => {
      }

      /* Like Stock */
      let likeStock = (stockName, nextStep) => {

      }

      /* Get Price */
      let getPrice = (stockDocument, nextStep) => {
        // nextStep(stockDocument, outputResponse)
      }

      /* Build Response for 1 Stock */
      let processOneStock = (stockDocument, nextStep) => {

      }

      let stocks = []
      /* Build Response for 2 Stocks */
      let processTwoStocks = (stockDocument, nextStep) => {

      }
      /* Process Input*/
      if (typeof (req.query.stock) === 'string') {
        /* One Stock */


      } else if (Array.isArray(req.query.stock)) {
        twoStocks = true
        /* Stock 1 */


        /* Stock 2 */


      }

      app.route('/api/stock-prices')
        .get(function(req, res) {

        });

    })
};