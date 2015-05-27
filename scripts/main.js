(function (w) {

  var theButton = w.document.getElementById('the-button');
  
  theButton.addEventListener('mousedown', ev_canvas, false);
  theButton.addEventListener('mousemove', ev_canvas, false);
  theButton.addEventListener('touchstart', ev_canvas, false);
  theButton.addEventListener('touchmove', ev_canvas, true);
  theButton.addEventListener('touchend', ev_canvas, false);

  document.body.addEventListener('mouseup', ev_canvas, false);
  document.body.addEventListener('touchcancel', ev_canvas, false);


})(window);