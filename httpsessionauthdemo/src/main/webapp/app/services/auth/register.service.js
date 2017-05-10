(function () {
    'use strict';

    angular
        .module('httpsessionauthdemoApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
