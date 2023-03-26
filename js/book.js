//Contact form Submission via googlescript

$("#form-submit").on("click", function (e) {
  var $formContact = $("#contact-us"),
    url =
      "https://script.google.com/macros/s/AKfycbwbJbgmbr3b2Ipe_ubtqIMT6gsd6ZTKsxktJfJYkqcAVZPkMvFTEW3BGsJqjTio3JL0-w/exec"; //this has to be taken from a deployed google spread sheet

  e.preventDefault();

  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $formContact.serializeArray(),
    success: function success(data) {
      $('button[type="submit"]').removeClass("clicked");
      $("#form-submit").html(
        "<i class='fa fa-paper-plane'></i>&nbsp;Send Message"
      );
      $("#form-submit").prop("disabled", false);
      $("#form-result2")
        .addClass("alert-warning")
        .removeClass("alert-success alert-danger")
        .css("display", "block");
      $("#form-result2")
        .addClass("alert-success")
        .removeClass("alert-warning alert-danger")
        .css("display", "block");
      $("#form-result2 > .content").html("Message sent successfully!");
    },
    error: function error() {
      $('button[type="submit"]').removeClass("clicked");
      $("#form-submit").html(
        "<i class='fa fa-paper-plane'></i>&nbsp;Send Message"
      );
      $("#form-submit").prop("disabled", false);
      $("#form-result2")
        .addClass("alert-danger")
        .removeClass("alert-warning alert-success")
        .css("display", "block");
      $("#form-result2 > .content").html(
        "Unsuccesful attempt. Please try again."
      );
    },
  }).then(
    $("#form-result2").css("display", "none"),
    $('button[type="submit"]').addClass("clicked"),
    $("#form-submit").prop("disabled", true),
    $("#form-submit").html("<i class='icon-loader fa-spin' > </i> Sending..")
  );
});
