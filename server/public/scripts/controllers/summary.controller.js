myApp.controller('SummaryController', function (SummaryService) {
    console.log('SummaryController created');

    $('.maskPhone').mask('(000) 000-0000');

    var self = this;


    self.printDiv = function () {
        window.print();
    }

    

});

