myApp.service('SummaryService', function ($http, $location) {
   //    console.log('SummaryService Loaded');
    var self = this;

   self.getSummary = function (c) {
      // console.log('getSummary hit', c);

      $http.get('/summary/' + c).then(function (response) {
         // console.log('response.data[0] is', response.data[0]);

         self.summaryObject = response.data[0];
         // console.log('self.cuid', self.cuid);

         console.log('SummaryService.summaryOjbect is ', self.summaryObject);
         self.getServiceObject(response.data[0]);

      });

   };

   self.getServiceObject = function(o) {
       $http.get('/authorization/' + o.customer_id).then(function (response) {
           // console.log('response.data', response.data);

           self.serviceObject = response.data[0];
           console.log('SummaryService.serviceObject is', self.serviceObject);
           $location.path('/summary');
       });
   }

});
