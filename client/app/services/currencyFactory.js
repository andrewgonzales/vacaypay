(function () {
  'use strict';

  angular.module('app')
  .config(['$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .factory('Currency', ['$http', function ($http) {
    var urlEndpoint = 'http://api.fixer.io/latest?base=USD';

    var services = {
      getRate: getRate
    };

    return services;


    function getRate(from, successCb, errorCb) {
      $http.get(urlEndpoint)
      .then(function (res) {
        // var rate = res.data.from;
        var rateData = res.data;
        console.log(rateData);
        successCb(rateData);
      }, function (res) {
        console.log('Error retrieving exchange rates');
        errorCb(res);
      });
    // function convert(){};

    }
  }]);
})();
