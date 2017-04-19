/*(function() {
  $('.logo').on('click', function(e){
    e.preventDefault();
    $('.wrapper').toggleClass('toggled');
    $('.logout').toggleClass('btn-green');
    $('#newMessageBtn').toggleClass('toggled');
    $('#newMessageBtn').html('<span class="glyphicon glyphicon-edit compose-icon"></span>');
  });
})();*/

(function() {
  $('.compose-header').on('click', function(e){
    if (e.target == this){
      $('.compose-wrapper').toggleClass('minimized');
    }
  });
})();

(function() {
  $('.compose-header div').on('click', function(e){
    if (e.target == this){
      $('.compose-wrapper').toggleClass('minimized');
    }
  });
})();

(function() {
  $('#newMessageBtn').on('click', function(){
    $('.compose-wrapper').show();
    $(this).attr('disabled',true);
  });
})();

(function() {
  $('.close-compose').on('click', function(){
    $('.compose-wrapper').hide();
    $('#newMessageBtn').attr('disabled',false);
  });
})();

/*(function() {
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
})();*/

function textCounter(field,field2,maxlimit){
 var countfield = document.getElementById(field2);
  if( field.value.length > maxlimit ){
    field.value = field.value.substring( 0, maxlimit );
  return false;
  }
  else{
    countfield.value = "Remaining: " + (maxlimit - field.value.length);
  }
}

function show_outbound_messages(nav_item){
  $('.sidebar-nav li').removeClass('active');
  $(nav_item).addClass('active');
  $.post('/messaging/outbound/',
  {
    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
  },
  function(data){
    $('#mainContainer').css('overflow-y','scroll');
    $('#mainContainer').html(data);
  });
}

function show_inbound_messages(nav_item){
  $('.sidebar-nav li').removeClass('active');
  $(nav_item).addClass('active');
  $.post('/messaging/inbound/',
  {
    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
  },
  function(data){
    $('#mainContainer').css('overflow-y','scroll');
    $('#mainContainer').html(data);
  });
}

(function() {
  $('#inboundTable tbody tr td:not(\'.action-td\')').on('click', function(e){
      open_inbound_message($(this).parent().attr('id'));
  });
})();

function open_inbound_message(message_id){
  $.get('/messaging/read',
    {
      message_id:message_id,
      type:'InboundMessage'
    },
  function(data){
    $('#mainContainer').css('overflow','hidden');
    $('#mainContainer').html(data);
  });
}

