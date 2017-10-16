myApp.controller('SummaryController', function (SummaryService, AdminService) {
    //console.log('SummaryController created');

    var self = this;
    self.AdminService = AdminService;
    self.serviceObject = SummaryService.serviceObject;
    self.summaryObject = SummaryService.summaryObject;





    self.good = Object.keys(self.summaryObject).filter(function (key) {
        return self.summaryObject[key] == "good"
    });
    self.pass = Object.keys(self.summaryObject).filter(function (key) {
        return self.summaryObject[key] == "pass"
    });
    self.fail = Object.keys(self.summaryObject).filter(function (key) {
        return self.summaryObject[key] == "fail"
    });


    self.printDiv = function () {
        window.print();
    }

});

