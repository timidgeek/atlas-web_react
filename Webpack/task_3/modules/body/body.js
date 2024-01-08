import $ from "jquery";
import _ from 'lodash';

$(document).ready(function() {
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  let count = 0;

  function updateCounter() {
    // add event listener: if button clicked, increment count
    count++;
    $("#count").text(`${count} clicks on the button`);
    }
  
  // bind debounce func to click event to handle spam possibility
  const debounced = _.debounce(updateCounter, 500);
  $("button").on("click", debounced)
})