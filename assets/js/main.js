window.onload = function(){
    obfuscateEmail();
}

function obfuscateEmail() {
  var obfuscatedEmail = span = '';

  elem = document.getElementById("email");
  email = elem.innerHTML;

  for (var i = 0; i < email.length; ++i) {
    span = '<span>' + email[i] + '</span>';
    obfuscatedEmail += span;
  }

  elem.innerHTML = obfuscatedEmail;
}
