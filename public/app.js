console.log("app.js linked");

var app = angular.module("evolv3App", []);

app.controller('mainController', ['$http', function($http){
    console.log('controller connected');
    var museumId = "1826576--jeska706";
    // my usersets https://www.rijksmuseum.nl/api/nl/usersets/1826576-myfirstcollection?key=mherhzxy&format=json
    var apiKey = "mherhzxy";
    var paintings = "&type=schilderij&f.normalized32Colors.hex=%20%23367614"
    this.user = {};
    this.artist = [];
//------------------  AJAX call to /users -----------------------
   $http({
        method: 'GET',
        url: "http://localhost:3000/users"
   }).then(
        function(res) {
            // console.log(res, " :successful callback");
            this.users = res.data;
            // console.log(this.users);

    },
        function(res) {
            console.log(res, " :failed callback");
    }.bind(this));


//-------------------- API hit to Rijks museum ,  set of 10 -------------
//      need to set a randomizer on this, currently returning same 10

    $http({
        method: "GET",
        url: "https://www.rijksmuseum.nl/api/en/collection/?key=mherhzxy&format=json&page=16"
    }).then(
        function(res){
            console.log(res, " :successful callback");
            //returns array of objects
            this.artObjects = res.data.artObjects;
            //empty data array
            var allData = [];
            //artObject array
            var getData = function(){
                for (var i = 0; i < res.data.artObjects.length;i ++){
                    this.data = res.data.artObjects[i];
                    console.log(this.data);
                    this.headShot = this.data.headerImage.url
                    console.log(this.headShot);
                    this.title = this.data.title;
                    console.log(this.title);
                    this.artists = this.data.principalOrFirstMaker;
                    console.log(this.artists);
                }
            }
            getData();

    },
        function(res) {
            console.log(res, " :failed callback");
    }.bind(this));











}]);//end of mainController
