$(document).ready(function() {
    page.init();
});
var ChooseCharacter = "";
var ChooseRival = "";
var ChooseEatery = "";
var ChooseUtensil = "";


var page = {
    init: function() {
        page.styling();
        page.events();
    },

    styling: function() {
            page.characterGet();
            page.rivalGet();
            page.utensilGet();
            page.eateryGet();
          },


    events: function() {
      $('.char-info').on('click', page.characterGet);
      $('.utensil-info').on('click', page.utensilGet);
      $('.eatery-info').on('click', page.eateryGet);
      $('.rival-info').on('click', page.rivalGet);

          },

characterGet: function() {
      var tmpl = _.template(templates.charTemplate);
                  charChoice.forEach(function(el) {
                      $("char-container").append(tmpl(el));
                  });
              },

selectChar: function(event) {
event.preventDefault();
  ChooseCharacter = charChoice[($(this).attr('id'))];
  console.log("added character:", ChooseCharacter);
  $('.char-selection').addClass('inactive');
  $('.utensil-selection').removeClass('inactive');
  $('.char-info').append("Cannibal Picked: " + ($(this).attr('rel')));
                  },

utensilGet: function() {
        var tmpl = _.template(templates.utensilTemplate);
        utensilChoice.forEach(function(el) {
            $('.utensil-container').append(tmpl(el));
        });
    },


selectUtensil: function(event) {
  event.preventDefault();
  ChooseCharacter.utensilSelection(utensilChoice[($(this).attr('id'))]);
  console.log("added utensil: ", ChooseCharacter);
  $('.char-selection').addClass('inactive');
  $('.utensil-selection').addClass('inactive');
  $('.eatery-selection').removeClass('inactive');
  $('.char-info').append(" | " + "Utensil Picked: " + ($(this).attr('rel')) );
        },

eateryGet: function() {
        var tmpl = _.template(templates.eateryTemplate);
        eateryChoice.forEach(function(el) {
            $('.eatery-container').append(tmpl(el));
        });
    },

selectEatery: function(event) {
  event.preventDefault();
  ChooseCharacter.eaterySelection(eateryChoice[($(this).attr('id'))]);
  console.log("added eatery: ", ChooseCharacter);
  page.rivalGet();
  $('.char-info').append(" | " +"Eatery Picked: " + ($(this).attr('rel')));
  $('.eatery-selection').addClass('inactive');
  $('.rival-selection').removeClass('inactive');
         },

rivalGet: function() {
var rivalArr = charChoice.filter(function(el){
  return Number(ChooseCharacter.id) !== el.id;
       });
       var tmpl = _.template(templates.rivalTemplate);
        rivalArr.forEach(function(el) {
            $('.rival-container').append(tmpl(el));
        });
    },

selectRival: function() {
  event.preventDefault();
  ChooseRival = charChoice[($(this).attr('id'))];
  console.log("You picked to eat: " + ChooseRival.name);
  ChooseRival.eaterySelection(ChooseCharacter.eatery);
  $('.char-info').append(" | " + "Rival Cannibal: " + ($(this).attr('rel')));
  $('.rival-selection').addClass('inactive');



    },
}
