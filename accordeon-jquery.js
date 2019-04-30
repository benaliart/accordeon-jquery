function accordeonJquery(target = ".accordeon", scroll = false) {

  console.log ("Set Accordeon Jquery to '" + target +"'");

  //HTML STRUCTURE
  // > Target (accordeon)
  //  > DOM (bloc A)
  //    > DOM 1 (titre)
  //    > DOM 2 (content)
  //  > DOM (bloc B)
  //    > DOM 1 (titre)
  //    > DOM 2 (content)
  //  ...etc

  // Hide "content"
  $(target).children().children().next().hide();

  // Add "pointer class to all "title"
  $(target).children().each ( function () {
    $(this).children().first().toggleClass("pointer")
  });

  // Expand the content of the first bloc
  $(target).children().children().first().toggleClass("expanded");
  $(target).children().children().eq(1).slideToggle(600);  

  // on click event: 
  $(target).children().click(function () {

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

  // If Scroll effet is activated and scrolltoID function is set
  if(scroll === true) {
    $(".pointer").click(function () {

      // If ScrolltoID function exist
      // See 
      if (typeof scrolltoID === "function") { 
        console.log("click");
        // safe to use the function
        scrolltoID($(this), 30, false, 610);
      }
      
    });    
  }


}     