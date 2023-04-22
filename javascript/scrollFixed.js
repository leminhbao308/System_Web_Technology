window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-fixed").style.top = 0;
  } else {
    document.getElementById("contactID").style.position = "relative"
    document.getElementById("contactID").style.top = 0;
    document.getElementById("contactID").style.zIndex = 9999;
    document.getElementById("nav-fixed").style.top = "40px";
  }
}