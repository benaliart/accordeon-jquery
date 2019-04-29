function accordeonJquery(target) {

  //HTML STRUCTURE
  // > Target (accordeon)
  //  > DOM (bloc)
  //    > DOM 1 (titre)
  //    > DOM 2 (content)

  $(target).children().children().next().hide();

  // Ajouter la class pointer à tous les target > DOM > DOM 1
  $(target).children().each ( function () {
    $(this).children().first().toggleClass("pointer")
  });

  $(target).children().children().first().toggleClass("expanded");
  $(target).children().children().eq(1).slideToggle(600);  

  $(target).children().click(function () {
      console.log("Start accordeon");

    var targetthis = $(this);
    if(targetthis.children().first().hasClass("expanded")) {
    }
    else {
      $(target).children().children().next().slideUp(600);
      $(target + " *").delay(1).removeClass("expanded");
      targetthis.children().eq(1).delay(1).slideToggle(600);
      targetthis.children().first().delay(1).toggleClass("expanded");          
    }     

  });

  $(".pointer").click(function () {
    // If ScrolltoID function exist
    // See 
    if (typeof scrolltoID === "function") { 
      // safe to use the function
      scrolltoID($(this), 100, "false",610);
    }
    
  });

}     