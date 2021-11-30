// Information Security with HelmetJS# 11/14 Questions

// This programming course focuses on HelmetJS, a type of middleware
// for Express - based applications that automatically sets HTTP headers.
// This way it can prevent sensitive information from unintentionally being passed between the server and client.
// Completing the courses below will help you understand how to protect your website from malicious behavior.


const express = require('express');
const app = express();

// 1. Install and Require Helmet
let helmet = require('helmet');

let ninetyDaysInSeconds = 90 * 24 * 60 * 60; // <= Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()




module.exports = app;
const api = require('./server.js');

// 2. Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
app.use(helmet.hidePoweredBy());
app.use(express.static('public'));

// 3. Mitigate the Risk of Clickjacking with helmet.frameguard()
app.use(helmet.frameguard({
  action: 'deny'
}));

// 4. Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
app.use(helmet.xssFilter({}));

// 5. Avoid Inferring the Response MIME Type with helmet.noSniff()Passed
app.use(helmet.noSniff());

// 6. Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
app.use(helmet.ieNoOpen());

// 7. Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
app.use(helmet.hsts({
  maxAge: ninetyDaysInSeconds,
  force: true
}))
// 8. Disable DNS Prefetching with helmet.dnsPrefetchControl()
app.use(helmet.dnsPrefetchControl());

// 9. Disable Client-Side Caching with helmet.noCache()
app.use(helmet.noCache());

// 10. Helmet CSP Directives
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-cdn.com']
  }
}));

// 11. Configure Helmet Using the ‘parent’ helmet() Middleware
app.use(helmet({
  frameguard: { // configure
    action: 'deny'
  },
  contentSecurityPolicy: { // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false // disable
}))
app.disable('strict-transport-security');

app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});