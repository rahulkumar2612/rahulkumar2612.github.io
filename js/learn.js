
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n)
{
  showDivs(slideIndex += n);
}

function currentDiv(n)
{
  showDivs(slideIndex = n);
}
var glbn = 0;
function showDivs(n)
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dem");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}

  if (n == x.length) document.querySelector('#submitQuiz').style.display = "block";

  for (i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" dot-current_learn", "");
    dots[i].className = dots[i].className.replace(" dot-selected_learn", "");
  }
  x[slideIndex-1].style.display = "block";
  glbn = Math.max(glbn, n);
  for (i = 1; i < glbn; i++)
  {
    if (i != slideIndex)
      dots[i-1].className += " dot-selected_learn";
  }
  dots[slideIndex-1].className += " dot-current_learn";
}

function reset(x)
{
  if (x == "quiz")
  document.location = "quiz.html";
}
