import $ from "jquery";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

updateCounter(
  // add event listener: if button clicked, increment count
  $(".button").click(function (){
    count++;
    $("#count").text(`{count} clicks on the button`);
  }),
);

// bind debounce func to click event to handle spam possibility
const debounced = _.debounce(handleClick, 1000);
$(".button").on("click", debounced)
