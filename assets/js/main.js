window.onload = function(){
    obfuscateEmail();
    $(window).bind('hashchange', onURLChange);
}

function obfuscateEmail() {
  var obfuscatedEmail = span = '';

  elem = $("#email");
  email = elem.html();

  for (var i = 0; i < email.length; ++i) {
    span = '<span>' + email[i] + '</span>';
    obfuscatedEmail += span;
  }

  elem.html(obfuscatedEmail);
}

function onURLChange(){
    $(".side-link").each(function(index){
        $(this).removeClass("primary-"+index);
        $(".masthead-title").removeClass("primary-"+index);
        if ($(this).attr("href") == window.location.hash){
            $(this).addClass("primary-"+index);
            $(".masthead-title").addClass("primary-"+index);
        }
    });
}
