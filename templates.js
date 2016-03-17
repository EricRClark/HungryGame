var templates = {};
templates.charTemplate = [
  // "<div id= '<%= id %>' rel = '<%= name %>' class='char-info'>",
  "<h1> <%= name %> </h1>",
  // "<img src = '<%= img %>'>",
  "</div>"
].join("");

templates.utensilTemplate = [
  // "<div id= '<%= id %>' rel = '<%= name %>' class='utensil-info'>",
  "<h3> <%= name %> </h3>",
  "<img src = '<%= img %>'>",
  "</div>"
].join("");

templates.eateryTemplate = [
  // "<div id= '<%= id %>' rel = '<%= name %>' class='eatery-info'>",
  "<h3> <%= name %> </h3>",
  // "<img src = '<%= img %>'>",
  "<h3> Ambience:  <%= setAmbience %> </h3>",
  "</div>"
].join("");

templates.rivalTemplate = [
  // "<div id= '<%= id %>' rel = '<%= name %>' class='rival-info'>",
  "<h3> <%= name %> </h3>",
  // "<img src = '<%= img %>'>",
  "</div>"
].join("");
