console.log("app.js linked");

var app = angular.module("evolv3App", []);

app.controller('mainController', ['$http', function($http){
    console.log('controller connected');
    var museumId = "1826576--jeska706";
    // my usersets https://www.rijksmuseum.nl/api/nl/usersets/1826576-myfirstcollection?key=mherhzxy&format=json
    // hide this key
    var apiKey = "mherhzxy";
    this.user = {};
    this.artist = [];
    this.message = "Hello this is a test";
    var controller = this;
    controller.users = [];
    controller.art = [];
    controller.data = [];
//------------------  AJAX call to /users -----------------------
   $http({
        method: 'GET',
        url: "http://localhost:3000/users"
   }).then(
        function(res) {
            console.log(controller);
            console.log(res, " :successful callback");
            controller.users = res.data;
            // console.log(this.users);

    },
        function(res) {
            console.log(res, " :failed callback");
    }.bind(this));

//-------------------- API hit to Rijks museum ,  set of 10 -------------
//      need to set a randomizer on this, currently returning same 10 want 16

    $http({
        method: "GET",
        url: "https://www.rijksmuseum.nl/api/en/collection/?q=masterpieces&key=mherhzxy&format=json"
    }).then(
        function(res){
            console.log(res, " :successful callback");
            controller.art = res.data.artObjects;
            console.log(controller.art);
    },
        function(res) {
            console.log(res, " :failed callback");
    }.bind(this));











}]);//end of mainController
