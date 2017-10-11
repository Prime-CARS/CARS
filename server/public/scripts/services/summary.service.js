myApp.service('SummaryService', function ($http, $location) {
   console.log('SummaryService Loaded');

   self = this

   self.getAuth = function (c) {
      $http.get('/summary').then(function (response) {
         $location.path('/summary');
      })
      
      
   }


});
