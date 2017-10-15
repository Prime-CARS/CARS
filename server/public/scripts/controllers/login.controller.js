myApp.controller('LoginController', function ($http, $location, AdminService) {
//console.log('LoginController created');
  var vm = this;
  vm.user = {
    username: '',
    password: '',
    role: '',
  };
  vm.message = '';

  vm.AdminService = AdminService;

  vm.login = function () {
  //console.log('LoginController -- login');
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = "Enter your username and password!";
    } else {
    //console.log('LoginController -- login -- sending to server...', vm.user);
      $http.post('/', vm.user).then(function (response) {
        if (response.data.username) {
        //console.log('LoginController -- login -- success: ', response.data);
          // location works with SPA (ng-route)
          //$location.path('/admin');  http://localhost:5000/#/user
          if (response.data.role === 'admin') {
            $location.path('/admin');
          } else {
            $location.path('/mechanic');
          }
        } else {
        //console.log('LoginController -- login -- failure: ', response);
          vm.message = "Wrong!!";
        }
      }).catch(function (response) {
      //console.log('LoginController -- registerUser -- failure: ', response);
        vm.message = "Wrong!!";
      });
    }
  };

  vm.registerUser = function () {
  //console.log('LoginController -- registerUser');
    if (vm.user.username === '' || vm.user.password === '' || vm.user.role === '') {
      vm.message = "Choose a username and password!";
    } else {
    //console.log('LoginController -- registerUser -- sending to server...', vm.user);
      $http.post('/register', vm.user).then(function (response) {
      //console.log('LoginController -- registerUser -- success');
        swal({
          title: 'All set!',
          text: 'The new user has been registered.',
          type: 'success',
        })
      }).catch(function (response) {
      //console.log('LoginController -- registerUser -- error');
        vm.message = "Please try again."
      });
    }
  }
});
