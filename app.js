/*   1st Constructer  */
function Player(options) {
    var options = options || {};
    this.energy = options.energy || 900;
    this.name = options.name || "Hungry Hal";
    this.id = options.id;
    this.chewRate /*power*/ = options.chewRate || 5;
    this.barfs = 0;
    this.eat = function(rival) {
        this.damage(rival);
    };

    this.damage = function(rival) {
        rival.energy -= 200;
        var random = Math.floor(Math.random() * 10);
        var utensil = utensilChoice[Math.floor(Math.random() * 4)];
        var eatery = eateryChoice[Math.floor(Math.random()*4)];
        if (random > 4) {
            if (rival.energy < 1) {
                console.log("Good God! There's nothing left of " + rival.name + " to eat!");
            }
            if (this.utensil) {
                rival.energy = rival.energy - (this.chewRate * this.utensil.firepower);
                console.log("Oh the humanity of it all!!! To be eaten alive with a " + this.utensil.desc + ". " +
                    rival.name + "'s energy level is down to " + rival.energy +
                    ". Gruesomely big bite there!");

            } else {
                this.energy = this.energy - rival.chewRate;
                console.log("Donner Party of 2, Donner Party of 2..." + rival.name +
                    "'s energy level is down to " + rival.energy + ". Gruesomely big bite there!");
            }
        } else {
            this.barfs = this.energy -= 100;
            rival.energy += 200;
            console.log(
                "Ewww! Tried to bite, instead out came some barf! That'll sap some some energy and layers of tooth enamel. " +
                this.name + "'s energy level is down to " + this.energy);
        }
    };

    this.ability = function(name, firepower) {
        this.utensil = new Utensil({
            name: name,
            firepower: firepower
        });
        console.log(this.name + " now has a " + this.utensil.desc);
    };

};

/*   2nd Constructer  */
function Eatery(options) {
    var options = options || {};
    this.ambience = function() {
        var random = Math.floor(Math.random() * 10);

    };
    this.name = options.name;
    this.id = options.id;
    this.img = options.img;
    this.setAmbience = options.setAmbience;
    // this.overallAmbience = this.setAmbience + this.ambience();
}

/*   3rd Constructer   */
function Utensil(options) {
    var options = options || {};
    this.desc = options.desc || {};
    this.firepower = options.firepower || 2;
    this.id = options.id;
    this.img = options.img;
}

var bar = new Eatery({
    name: "Hall's Chop House",
    id: 0,
    setAmbience: 5,
    img: "http://27e08ead0eac2a6496f0-a8be818cc85355d75b6e295140c8ee00.r0.cf1.rackcdn.com/511_106_med.jpg"
});

var office = new Eatery({
    name: "Oak Steakhouse",
    id: 1,
    setAmbience: 3,
    img: "http://www.richbell.com/wp-content/uploads/2012/02/wpid4845-simmons-0064.jpg"
});

var tiy = new Eatery({
    name: "Outback Steakhouse",
    id: 2,
    setAmbience: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Outback_Steakhouse_CA.JPG"
});

var party = new Eatery({
    name: "Ryan's Family Steakhouse",
    id: 3,
    setAmbience: 1,
    img: "https://c2.staticflickr.com/2/1001/989064058_e1803ee3bf_b.jpg"
});

var eateryChoice = ["Oak", "Ryan's Family Steak House", "Outback", "Hall's Chop House"];

/*   Players   */

var Armin = new Player({
    energy: 900,
    name: "Armin Meiwes",
    id: 0,
    img: "http://i0.wp.com/listverse.com/wp-content/uploads/2008/12/image005-3-tm.jpg?resize=400%2C267"
});
var Kobayashi = new Player({
    energy: 1000,
    name: "Kobayashi",
    id: 1,
    img: "https://s1.yimg.com/bt/api/res/1.2/_D_JnfKi0EBWsBAwEq2IXQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1pbnNldDtoPTQyMTtpbD1wbGFuZTtxPTc1O3c9NjMw/http://media.zenfs.com/en_us/News/Reuters/2014-07-04T191726Z_702048396_GM1EA7508YA01_RTRMADP_3_USA-JULYFOURTH.JPG"
});
var Hannibal = new Player({
    energy: 900,
    name: "Hannibal Lecter",
    id: 2,
    img: "https://s-media-cache-ak0.pinimg.com/736x/25/1f/dc/251fdc8bbd438badc49e43c1c75c8f16.jpg"
});
var Jeff = new Player({
    energy: 1000,
    name: "Jeffrey Dahmer",
    id: 3,
    img: "https://i.ytimg.com/vi/dzC-FDJkvQo/hqdefault.jpg"
});

var charChoice = [Armin, Kobayashi, Hannibal, Jeff];


/*   Utensils   */
var shovel = new Utensil({
    firepower: 100,
    id: 0,
    desc: "Shovel",
    image: ("https://cdn1.iconfinder.com/data/icons/tools-glyph/32/garden-trowel-512.png")
});
var spork = new Utensil({
    firepower: 20,
    id: 1,
    desc: "Spork",
   image: ("http://cdn2.hubspot.net/hub/31499/file-13717830-jpg/images/spork-resized-600.jpg")
});
var fork = new Utensil({
    firepower: 40,
    id: 2,
    desc: "Fork",
    image: ("https://image.freepik.com/free-icon/fork-in-diagonal_318-61187.png")
});
var mellonBaller = new Utensil({
    firepower: 50,
    id: 3,
    desc: "The Mellon-Baller of Doom",
    image: ("http://www.prestigesmartchef.com/Assets/images/equipment/1_55_MellonBaller.jpg")
});

var utensilChoice = [shovel, spork, fork, mellonBaller];
