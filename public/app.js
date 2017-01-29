console.log("app.js linked");

var app = angular.module("evolv3App", []);

app.controller('mainController', ['$http', function($http){
    console.log('controller connected');
    var museumId = "1826576--jeska706";
    // my usersets https://www.rijksmuseum.nl/api/nl/usersets/1826576-myfirstcollection?key=mherhzxy&format=json
    var apiKey = "mherhzxy";
    this.user = {};
    this.artist = [];
    this.message = "Hello this is a test";
    var controller = this;
    controller.users = [];
    controller.art = [];
    controller.data = [];
    controller.formdata = {};
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
//---------------------------API Brooklyn Museum ---------------------------

        //Not working

    // $http({
    //     method: "GET",
    //     url: "'https://www.brooklynmuseum.org/api/v2/?key=QmQt8g4my3GCKaeNLeZ4raVzx1byP9HT&format=json"
    // }).then(
    //     function(res){
    //         console.log(res, " :successful callback");
    //         // controller.art = res.data.artObjects;
    //         // console.log(controller.art);
    //     },
    //     function(res) {
    //         console.log(res, " :failed callback");
    // }.bind(this));
    //     $http({
    //         url: 'https://www.brooklynmuseum.org/api/v2/exhibition?limit=10',
    //         type: 'GET',
    //         beforeSend: function (xhr) {
    //           xhr.setRequestHeader('api_key', ' QmQt8g4my3GCKaeNLeZ4raVzx1byP9HT');
    //         },
    //         data: {},
    //         success: function (res) {
    //             console.log(res)
    //          },
    //         error: function () { },
    //   });

//---------------------------- form field ------------------------------------
    // this.addUser = function(){
    //     console.log('addUser working: ' ,this.formdata);
    //     $http({
    //         method: 'POST',
    //         url: "http://localhost:3000/users",
    //         data: this.formdata
    //     }).then(function(res){
    //         console.log("data from server: ", res);
    //         this.formdata = {};
    //     },
    //     function(res){
    //         console.log(res, " :failed callback in form field");
    //     }.bind(this));
    // }//end of form









}]);//end of mainController
