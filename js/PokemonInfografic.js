angular.module('PokemonInfografic', ['PokemonInfograficService'], function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'template/map.html', controller: HomeCtrl })
        .when('/route/:routeId', { templateUrl: 'template/pkmnOnRoute.html', controller: RouteCtrl,
            resolve: {
                delay: function($q, $timeout, Page) {
                    Page.toggleUpdating();
                    var delay = $q.defer();
                    $timeout(delay.resolve, 300);
                    return delay.promise;
                }
            }
        })
        .otherwise({redirectTo: '/'});
}).filter('regex', function() {
    return function(input, field, regex) {
        var patt = new RegExp(regex);
        var out = [];
        for (var i = 0; i < input.length; i++){
            if(patt.test(input[i][field]))
                out.push(input[i]);
        }
        return out;
    };
});

angular.module('PokemonInfograficService', [])

    .factory('Page', function($rootScope){
        var pageTitle = "Carregando...",
            pageId = "",
            updating = false;
        return {
            title:function(){
                return pageTitle;
            },
            setTitle:function(newTitle){
                pageTitle = newTitle;
            },
            pageId:function(){
                return pageId;
            },
            setPageId:function(newPageId){
                pageId = newPageId;
            },
            toggleUpdating:function(){
                updating = !updating;
            },
            getUpdating:function(){
                return updating;
            }
        }
    })

    .factory ('Model', function () {
    var data = [
        { id: 1, title: 'Rota 1', pokemons: [
            { number: 504, name: "Patrat", spot: "N", specialCondition:"none", game: "BW", rate: "50%", type: "normal" },
            { number: 506, name: "Lillipup", spot: "N", specialCondition:"none", game: "BW", rate: "50%", type: "normal" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "100%", type: "normal" },
            { number: 550, name: "Basculin", spot: "S", specialCondition:"none", game: "BW", rate: "100%", type: "water" }
        ] },
        { id: 2, title: 'Rota 2', pokemons: [
            { number: 504, name: "Patrat", spot: "N", specialCondition:"none", game: "BW", rate: "40%", type: "normal" },
            { number: 506, name: "Lillipup", spot: "N", specialCondition:"none", game: "BW", rate: "40%", type: "normal" },
            { number: 509, name: "Purrloin", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "dark" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "100%", type: "normal" }
        ] },
        { id: 3, title: 'Rota 3', pokemons: [
            { number: 504, name: "Patrat", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "normal" },
            { number: 506, name: "Lillipup", spot: "N", specialCondition:"none", game: "BW", rate: "10%", type: "normal" },
            { number: 509, name: "Purrloin", spot: "N", specialCondition:"none", game: "BW", rate: "10%", type: "dark" },
            { number: 519, name: "Pidove", spot: "N", specialCondition:"none", game: "BW", rate: "40%", type: "normal flying" },
            { number: 522, name: "Blitzle", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "electric" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "100%", type: "normal" },
            { number: 550, name: "Basculin", spot: "S", specialCondition:"none", game: "BW", rate: "100%", type: "water" }
        ] },
        { id: 4, title: 'Rota 4', pokemons: [
            { number: 551, name: "Sandile", spot: "N", specialCondition:"none", game: "BW", rate: "40%", type: "ground dark" },
            { number: 554, name: "Darumaka", spot: "N", specialCondition:"none", game: "BW", rate: "40%", type: "fire" },
            { number: 559, name: "Scraggy", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "dark fighting" },
            { number: 592, name: "Frillish", spot: "S", specialCondition:"none", game: "BW", rate: "100%", type: "water ghost" },
            { number: 594, name: "Alomomola", spot: "RW", specialCondition:"none", game: "BW", rate: "95%", type: "water" },
            { number: 593, name: "Jellicent", spot: "RW", specialCondition:"none", game: "BW", rate: "5%", type: "water ghost" }
        ] },
        { id: 5, title: 'Rota 5', pokemons: [
            { number: 510, name: "Liepard", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "dark" },
            { number: 568, name: "Trubbish", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "poison" },
            { number: 572, name: "Minccino", spot: "N", specialCondition:"none", game: "BW", rate: "30%", type: "normal" },
            { number: 574, name: "Gothita", spot: "N", specialCondition:"none", game: "B", rate: "30%", type: "psychic" },
            { number: 577, name: "Solosis", spot: "N", specialCondition:"none", game: "W", rate: "30%", type: "psychic" },
            { number: 573, name: "Cinccino", spot: "RG", specialCondition:"none", game: "BW", rate: "5%", type: "normal" },
            { number: 587, name: "Emolga", spot: "RG", specialCondition:"none", game: "BW", rate: "10%", type: "electric flying" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "85%", type: "normal" }
        ] },
        { id: 6, title: 'Rota 6', pokemons: [
            { number: 520, name: "Tranquill", spot: "N", specialCondition: "outWinter", game: "BW", rate: "15%", type: "normal flying" },
            { number: 582, name: "Vanillite", spot: "N", specialCondition: "onWinter", game: "BW", rate: "15%", type: "ice" },
            { number: 541, name: "Swadloon", spot: "N", specialCondition:"none", game: "BW", rate: "10%", type: "bug grass" },
            { number: 585, name: "Deerling", spot: "N", specialCondition:"none", game: "BW", rate: "35%", type: "normal grass" },
            { number: 588, name: "Karrablast", spot: "N", specialCondition:"none", game: "BW", rate: "25%", type: "bug" },
            { number: 590, name: "Foongus", spot: "N", specialCondition:"none", game: "BW", rate: "15%", type: "grass poison" },
            { number: 521, name: "Unfezant", spot: "RG", specialCondition:"none", game: "BW", rate: "5%", type: "normal flying" },
            { number: 542, name: "Leavanny", spot: "RG", specialCondition:"none", game: "BW", rate: "5%", type: "bug grass" },
            { number: 587, name: "Emolga", spot: "RG", specialCondition:"none", game: "BW", rate: "20%", type: "electric flying" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "70%", type: "normal" },
            { number: 550, name: "Basculin", spot: "S", specialCondition:"none", game: "BW", rate: "100%", type: "water" }
        ] },
        { id: 7, title: 'Rota 7', pokemons: [
            { number: 520, name: "Tranquill", spot: "N", specialCondition: "outWinter", game: "BW", rate: "30%", type: "normal flying" },
            { number: 613, name: "Cubchoo", spot: "N", specialCondition: "onWinter", game: "BW", rate: "30%", type: "ice" },
            { number: 585, name: "Deerling", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "normal grass" },
            { number: 590, name: "Foongus", spot: "N", specialCondition:"none", game: "BW", rate: "10%", type: "grass poison" },
            { number: 523, name: "Zebstrika", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "electric" },
            { number: 505, name: "Watchog", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "normal" },
            { number: 521, name: "Unfezant", spot: "RG", specialCondition: "outWinter",  game: "BW", rate: "5%", type: "normal flying" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "85%", type: "normal" },
            { number: 587, name: "Emolga", spot: "RG", specialCondition: "none", game: "BW", rate: "10%", scRate: "15%", type: "electric flying" }
        ] },
        { id: 8, title: 'Rota 8', pokemons: [
            { number: 536, name: "Palpitoad", spot: "N", specialCondition:"none", game: "BW", rate: "40%", type: "water ground" },
            { number: 616, name: "Shelmet", spot: "N", specialCondition:"none", game: "BW", rate: "40%", type: "bug" },
            { number: 618, name: "Stunfisk", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "ground electric" },
            { number: 618, name: "Stunfisk", spot: "S", specialCondition:"none", game: "BW", rate: "100%", type: "ground electric" },
            { number: 537, name: "Seismitoad", spot: "RW", specialCondition:"none", game: "BW", rate: "5%", type: "water ground" },
            { number: 618, name: "Stunfisk", spot: "RW", specialCondition:"none", game: "BW", rate: "95%", type: "ground electric" }
        ] },
        { id: 9, title: 'Rota 9', pokemons: [
            { number: 510, name: "Liepard", spot: "N", specialCondition:"none", game: "BW", rate: "10%", type: "dark" },
            { number: 569, name: "Garbodor", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "poison" },
            { number: 572, name: "Minccino", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "normal" },
            { number: 575, name: "Gothorita", spot: "N", specialCondition:"none", game: "B", rate: "30%", type: "psychic" },
            { number: 578, name: "Duosion", spot: "N", specialCondition:"none", game: "W", rate: "30%", type: "psychic" },
            { number: 624, name: "Pawniard", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "dark steel" },
            { number: 573, name: "Reuniclus", spot: "RG", specialCondition:"none", game: "BW", rate: "5%", type: "normal" },
            { number: 576, name: "Gothitelle", spot: "RG", specialCondition:"none", game: "B", rate: "5%", type: "psychic" },
            { number: 579, name: "Cinccino", spot: "RG", specialCondition:"none", game: "W", rate: "5%", type: "psychic" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "80%", type: "normal" },
            { number: 587, name: "Emolga", spot: "RG", specialCondition:"none", game: "BW", rate: "10%", type: "electric flying" }
        ] },
        { id: 10, title: 'Rota 10', pokemons: [
            { number: 507, name: "Herdier", spot: "N", specialCondition:"none", game: "BW", rate: "30%", type: "normal" },
            { number: 538, name: "Throh", spot: "N", specialCondition:"none", game: "W", rate: "10%", type: "fighting" },
            { number: 539, name: "Sawk", spot: "N", specialCondition:"none", game: "B", rate: "10%", type: "fighting" },
            { number: 590, name: "Foongus", spot: "N", specialCondition:"none", game: "BW", rate: "10%", type: "grass poison" },
            { number: 626, name: "Bouffalant", spot: "N", specialCondition:"none", game: "BW", rate: "20%", type: "normal" },
            { number: 627, name: "Rufflet", spot: "N", specialCondition:"none", game: "W", rate: "30%", type: "normal flying" },
            { number: 629, name: "Vullaby", spot: "N", specialCondition:"none", game: "B", rate: "30%", type: "dark flying" },
            { number: 508, name: "Stoutland", spot: "RG", specialCondition:"none", game: "BW", rate: "5%", type: "normal" },
            { number: 538, name: "Throh", spot: "RG", specialCondition:"none", game: "B", rate: "5%", type: "fighting" },
            { number: 539, name: "Sawk", spot: "RG", specialCondition:"none", game: "W", rate: "5%", type: "fighting" },
            { number: 531, name: "Audino", spot: "RG", specialCondition:"none", game: "BW", rate: "80%", type: "normal" },
            { number: 587, name: "Emolga", spot: "RG", specialCondition:"none", game: "BW", rate: "10%", type: "electric flying" }
        ] }
    ];
    return {
        routes:function () { return data; },
        getRoute:function(id){ return data[id-1]; }
    }
});

function MainCtrl($scope, Page) {
    $scope.page = Page;
}

function HomeCtrl($scope, Page, $location) {
    Page.setTitle("Grande Infografico Pokemon");
    Page.setPageId("home");

    $scope.goToRoute = function (id){ $location.path( "/route/" + id ); };
}


function RouteCtrl($scope, Page, Model, $routeParams, $location) {
    Page.toggleUpdating();
    $scope.route = Model.getRoute($routeParams.routeId);
    $scope.grassActive = true;
    $scope.gameFilter = 'B';
    $scope.winterFilter = 'outWinter|none';
    Page.setTitle($scope.route.title);
    Page.setPageId("route");

    $scope.pkmnPos = function (index, length){
        return index / (length-1) * 100 + '%';
    };

    $scope.pkmnRate = function (pkmn){
        return (
            $scope.winterFilter === 'onWinter|none' ? (!pkmn.scRate ? pkmn.rate : pkmn.scRate) : pkmn.rate
        );
    };

    $scope.openGrass = function (){ $scope.grassActive = true; };

    $scope.openSurf = function (){ $scope.grassActive = false; };

    $scope.close = function (){ $location.path( "/" ); };

}
