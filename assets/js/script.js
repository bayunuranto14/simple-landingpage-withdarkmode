$(".change").on("click", function () {
  if ($("nav").hasClass("navbar-dark")) {
    $("nav").addClass("bg-light");
    $("nav").removeClass("bg-dark");
    $("nav").removeClass("navbar-dark");
    $("body").removeClass("dark");
    $(".card").removeClass("text-bg-success");
    $(".switch").text("LIGHT MODE");
    $(".change").text("LIGHT");
    console.log("Light Mode Activated");
  } else {
    $("nav").addClass("navbar-dark");
    $("nav").addClass("bg-dark");
    console.log("Dark Mode Activated");
    $("body").addClass("dark");
    $(".card").addClass("text-bg-success");
    $(".switch").text("DARK MODE");
    $(".change").text("DARK");
  }
});

$(".change").on("click", function () {
  console.log("Testing ...");
  // $(".card").addClass("text-bg-success");
});

$("#exampleModal").on("shown.bs.modal", function () {
  $("#exampleModal").trigger("focus");
});

// $(".change").on("click", function () {
//   if ($("body").hasClass("dark")) {
//     $("nav").removeClass("bg-dark");
//     $("body").removeClass("dark");
//     $(".change").text("LIGHT");
//     console.log("Light Mode Activated");
//   } else {
//     $("body").addClass("dark");
//     console.log("Dark Mode Activated");
//     $(".change").text("DARK");
//   }
// });
