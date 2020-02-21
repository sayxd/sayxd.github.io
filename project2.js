$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spam").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spam").val("n");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $("#thevideo")[0].pause();
    }
  });

  // Form validation
  $("#signupbutton").click(function() {
    if($("#first_name").val()=="" || $("#middle_initial").val()=="" || $("#last_name").val()=="") {
      $("#name").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});


