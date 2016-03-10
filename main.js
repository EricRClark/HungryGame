function  Player(options) {
  var options = options || {};
  this.energy = options.energy || 20;
  this.name = options.name || "Hungry Hal";
  this.chewRate/*power*/ = options.chewRate || 2;
  this.barfs = 0;
  this.eat = function (rival) {
    rival.energy -= 400;
    var random = Math.floor(Math.random() *10);
    var utensil = allUtils[Math.floor(Math.random()*4)];
  if (random > 4) {
    if(rival.energy < 1) {
      console.log("Good God! There's nothing left of " + rival.name + " to eat!");
    }
    if(rival.utensil) {
      this.energy = this.energy - (rival.chewRate * rival.utensil.firepower);
      console.log("Oh the humanity of it all!!! To be eaten alive with a " + rival.utensil.name);
    } else {
      this.energy = this.energy - rival.chewRate;
      console.log("Donner Party of 2, Donner Party of 2... Gruesomely big bite there!");
    }
    } else {
      rival.barfs = this.energy - 2;
      console.log("Ewww! Tried to bite, instead out came some barf! That'll sap some some energy and layers of tooth enamel" /*,rival.energy*/);
    }
  };

  this.ability = function (name, firepower) {
   this.utensil = new Utensil({name: name, firepower: firepower});
  }
};

function Utensil(options) {
  var options = options || {};
  this.name = options.name || "with a Spork";
  this.firepower = options.firepower || 2;
}

var Ricky = new Player({energy: 10, name: "Ricky"});
var Kobayashi = new Player({energy: 1000, name: "Kobayashi"});

var shovel = new Utensil({firepower:100, name: "with a Shovel"});
var spork = new Utensil({firepower:20, name: "with a Spork"});
var fork = new Utensil({firepower:40, name: "with a Fork"});
var mellonBaller = new Utensil({firepower:50, name: "with a The Mellon-Baller of Doom"});

var allUtils = [shovel,spork,fork,mellonBaller];
