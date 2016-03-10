/*   1st Constructer  */
function  Player(options) {
  var options = options || {};
  this.energy = options.energy || 20;
  this.name = options.name || "Hungry Hal";
  this.chewRate/*power*/ = options.chewRate || 2;
  this.barfs = 0;
  this.eat = function (rival) {
    rival.energy -= 200;
    var random = Math.floor(Math.random() *10);
    var utensil = allUtils[Math.floor(Math.random()*4)];
    var eatery = allEateries[Math.floor(Math.random()*4)];

  if (random > 4) {
    if(rival.energy < 1) {
      console.log("Good God! There's nothing left of " + rival.name + " to eat!");
    }

    if(rival.utensil) {
      this.energy = this.energy - (rival.chewRate * rival.utensil.firepower);
      console.log("Oh the humanity of it all!!! To be eaten alive with a " + rival.this.utensil.name);

    } else {
      this.energy = this.energy - rival.chewRate;
      console.log("Donner Party of 2, Donner Party of 2... Gruesomely big bite there!");

    }

    } else {
      this.barfs = rival.energy - "200";
      console.log("Ewww! Tried to bite, instead out came some barf! That'll sap some some energy and layers of tooth enamel", "Energy level is down to " + this.energy);
    }

  };

  this.ability = function (name, firepower) {
   this.utensil = new utensil({name: name, firepower: firepower});
  }

};

/*   2nd Constructer  */
function Eatery (options) {
  var options = options || {};
  this.name = options.name
  this.ambience = function () {
    var random = Math.floor(Math.random() * 10 + 1);
    return random + this.setAmbience;
    };

  this.name = options.name;
  this.setAmbience = options.setAmbience;
  this.overallAmbience = this.setAmbience + this.ambience();
}

/*   3rd Constructer   */
function utensil(options) {
  var options = options || {};
  this.name = options.name || "with a Spork";
  this.firepower = options.firepower || 2;
}

var bar = new Eatery ({
  name: "Hall's Chop House",
  setAmbience: 5
});

var office = new Eatery ({
  name: "Oak",
  setAmbience: 3
});

var tiy = new Eatery ({
  name: "Outback",
  setAmbience: 2
});

var party = new Eatery ({
  name: "Ryan's Family Steak House",
  setAmbience: 1
});

var allEateries = ["Oak", "Ryan's Family Steak House", "Outback", "Hall's Chop House"];

/*   Players   */
var Ricky = new Player({energy: 900, name: "Ricky"});
var Kobayashi = new Player({energy: 1000, name: "Kobayashi"});


/*   Utensils   */
var shovel = new utensil({firepower:100, name: "Shovel"});
var spork = new utensil({firepower:20, name: "Spork"});
var fork = new utensil({firepower:40, name: "Fork"});
var mellonBaller = new utensil({firepower:50, name: "The Mellon-Baller of Doom"});

var allUtils = [shovel, spork, fork, mellonBaller];
