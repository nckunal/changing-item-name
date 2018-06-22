

/*$(document).ready(function() {

 $("#colorName").on("click" , function() {
  $(".animal, .fruits").hide();
}); 

 $("#list-animal").on("click" , function() {
  $(".color, .fruits").hide();
}); 

 $("#fruitsName").on("click" , function() {
  $(".animal, .color").hide();
}); 

});*/

$("input[type='radio'][name='list']").change(function(){
    
  var selected = $("input[type='radio'][name='list']:checked").val();
    
    if(selected == "colors") {
      $(".animal, .fruits").hide();
      $(".colors").show();
    }
    
    else if(selected == "animals"){
      $(".color, .fruits").hide();
      $(".animals").show();
    }
    
    else{
      $(".color, .animal").hide();
      $(".fruits").show();
    }
  });
