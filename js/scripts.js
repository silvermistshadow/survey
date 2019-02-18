$(document).ready(function(){
  $("#survForm").submit(function(event){
    event.preventDefault();
    var yourName = $("input#yourName").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var music = $("input:radio[name=music]:checked").val();

    $("#yourNameOut").text(yourName);
    $("#beverageOut").text(beverage);
    $("#flavorOut").text(flavor);
    $("#musicOut").text(music);

    $("#results").show();

  });

});
