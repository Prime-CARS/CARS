myApp.service('SummaryService', function ($http, $location) {
   console.log('SummaryService Loaded');

   self = this

   self.getSummary = function (c) {
      console.log('getSummary hit', c);
      
      $http.get('/summary').then(function (response) {
         $location.path('/summary');
      })
   }


});
