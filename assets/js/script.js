$(function(){
  $('#lastName').focus(function(){
  $('#lastName').css('border','1px green solid');
  });

  $('#lastName').blur(function(){
  $('#lastName').css('border','1px red solid');
  });

  $('#firstName').focus(function(){
  $('#firstName').css('border','1px green solid');
  });

  $('#firstName').blur(function(){
  $('#firstName').css('border','1px red solid');
  });

});
