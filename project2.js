function spamCheckbox(event){
    if (event.type == 'click'){
      console.log("spam box clicked");
      if($($("#receivespam").children()[0]).attr("src")=="pics/unchecked.png") {
        $($("#receivespam").children()[0]).attr("src","pics/checked.png");
        $("#receivespam").attr("aria-checked", "true");
      } else {
        $($("#receivespam").children()[0]).attr("src","pics/unchecked.png");
        $("#receivespam").attr("aria-checked", "false");
      }
    }

}

$(document).ready(function() {
  // Toggle the receive spam checkbox



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

    if($("#email").val()=="") {
      $("#em").addClass("error");

      return;
    } else {
      $("#em").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});


