$(document).ready(function() {
  'use strict';

  //LEFT MOBILE MENU OPEN
  $('.show-menu').on('click', function() {
    $('.mm-menu').css('right', '-25%');
  });

  //LEFT MOBILE MENU OPEN
  $('.hide-menu').on('click', function() {
    $('.mm-menu').css('right', '-100%');
  });

  // $('input#input_text, textarea#textarea1').characterCounter();
  //   Materialize.updateTextFields();
  //   $('.collapsible').collapsible();
  //   $('.materialboxed').materialbox();
  $('.carousel').carousel();
  //   $('select').material_select();
  $('.slider').slider();
  //   $('.dropdown-button').dropdown({
  //     inDuration: 300,
  //     outDuration: 225,
  //     constrainWidth: true, // Does not change width of dropdown to that of the activator
  //     hover: true, // Activate on hover
  //     gutter: 0, // Spacing from edge
  //     belowOrigin: false, // Displays dropdown below the button
  //     alignment: 'left', // Displays dropdown with edge aligned to the left of button
  //     stopPropagation: false // Stops event propagation
  //   });
});

//PORTFOLIO FILTER
$(function() {
  var filterList = {
    init: function() {
      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.logo'
        }
      });
    }
  };

  // Run the show!
  filterList.init();
});
