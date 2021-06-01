//hide message
$('.success').hide()
//set current day to display on page
$('#currentDay').text(moment().format("MMM Do YY"));  

// load any saved data
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//save text to local storage
$('.saveBtn').on('click', function (){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time, value);


    //start display of notification 
    $('.success').show()

    // Timeout to hide message
    setTimeout(function () {
      $('.success').hide()
    }, 2000);
}) 

function hourUpdater() {
  // get current number of hours
  var currentHour = moment().hours();

  // loop over time blocks
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    // check if we've moved past this time
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

hourUpdater();