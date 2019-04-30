
// Create a scroll effect to a DOM target
// int Offset : Offset of scroll effect
// int Masteroffset : false or DOM target of an offset (like a header or adminbar ...)
// int delay : delay the animation

function scrolltoID (target, offset = 0, masterOffset = false, delay = 10) {

  setTimeout(function() {
    targetOffset = target.offset().top;
    if (masterOffset === false) {
      var mastheadHeight = 0;
    }
    else {
      var mastheadHeight = $(masterOffset).height();
    }
    res = targetOffset - mastheadHeight - offset;      
    $('html,body').animate({
      scrollTop: (res)
    }, 600);
    return false;
  }, delay);

} 